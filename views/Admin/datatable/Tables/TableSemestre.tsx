import React, { useEffect, useMemo, useState } from 'react';
import { SemestreService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { SemestreActions } from './Actions';

import { ICSemestre } from 'interfaces/Entities';

import { SchemaSem } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsSem {
  id_sem: number;
  tipo_sem: string;
  valida_sem: number | string;
}

const customId = 'custom-id-TableSemestre';

const TableSemestre = () => {
  const { rowId, dataTableSemestre, setDataTableSemestre, setRowId } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SemestreService.getAll().then(({ data }) => {
      if (data) setDataTableSemestre(data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_sem',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'tipo_sem',
        headerName: 'Tipo del semestre',
        width: 290,
      },
      {
        field: 'valida_sem',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsSem>>) => {
          const { row } = data;
          return (
            <SemestreActions
              id={row.id_sem}
              tipo={row.tipo_sem}
              valida={row.valida_sem}
              rowId={rowId}
              setRowId={setRowId}
            />
          );
        },
      },
    ],
    [rowId]
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ICSemestre>({
    resolver: yupResolver(SchemaSem),
  });

  const watch_Id_Sem = watch('id_sem');
  const watch_Tipo_Sem = watch('tipo_sem');

  const onSubmit = async ({ id_sem, tipo_sem, valida_sem }: ICSemestre) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await SemestreService.create({
      id_sem: Number(id_sem),
      tipo_sem,
      valida_sem: 1,
    });

    if (data) {
      setDataTableSemestre([
        ...dataTableSemestre,
        { id_sem: Number(id_sem), tipo_sem, valida_sem: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Semestre creado con exito 😁',
        type: 'success',
        isLoading: false,
        position: 'top-right',
        autoClose: 2000,
        ...toastConfig,
      });
    }
    if (message) {
      toast.update(customId, {
        toastId: customId,
        render: 'Ocurrio un error al crear el Semetre 😓',
        isLoading: false,
        type: 'error',
        autoClose: 2000,
        ...toastConfig,
      });
    }

    setLoading(false);
  };

  return (
    <DataTable
      title='Manage Semestre'
      columns={columns}
      dataTable={dataTableSemestre}
      getRowId={(row) => row.id_sem}
      width='w-[570px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar un nuevo Semestre
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Sem}
            type='number'
            placeholder='ID Semestre'
            register={{ ...register('id_sem') }}
            errors={errors.id_sem}
          />

          <Input
            value={watch_Tipo_Sem}
            type='text'
            placeholder='Nombre del Semestre'
            register={{ ...register('tipo_sem') }}
            errors={errors.tipo_sem}
          />
        </div>

        <button
          type='submit'
          className='w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700'
        >
          {loading ? <Loader /> : 'Agregar'}
        </button>
      </form>
    </DataTable>
  );
};

export default TableSemestre;
