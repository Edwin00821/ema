import React, { FC, useEffect, useMemo, useState } from 'react';
import { SubtemaService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { SubtemaActions } from './Actions';

import { ICSubReq } from 'interfaces/Entities';

import { SchemaSub } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsSubtema {
  id_sub: number;
  nombre_sub: string;
  id_tem: number;
  valida_sub: number | string;
}

const customId = 'custom-id-TableSubtema';

const TableSubtema: FC = () => {
  const { rowId, dataTableSubtema, setDataTableSubtema, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SubtemaService.getAll().then(({ data }) => {
      if (data) setDataTableSubtema(data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_sub',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'nombre_sub',
        headerName: 'Subtema',
        width: 600,
      },
      {
        field: 'id_tem',
        headerName: 'ID tema',
        width: 290,
      },
      {
        field: 'valida_sub',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsSubtema>>) => {
          const { row } = data;
          return (
            <SubtemaActions
              id={row.id_sub}
              nombre={row.nombre_sub}
              valida={row.valida_sub}
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
  } = useForm<ICSubReq>({
    resolver: yupResolver(SchemaSub),
  });

  const watch_Id_Sub = watch('id_sub');
  const watch_Nombre_Subtema = watch('nombre_sub');
  const watch_Id_Tema = watch('id_tem');

  const onSubmit = async ({
    id_sub,
    nombre_sub,
    id_tem,
    valida_sub,
  }: ICSubReq) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);
    const { data, message } = await SubtemaService.create({
      id_sub: Number(id_sub),
      nombre_sub,
      id_tem,
      valida_sub: 1,
    });

    if (data) {
      setDataTableSubtema([
        ...dataTableSubtema,
        { id_sub: Number(id_sub), nombre_sub, id_tem, valida_sub: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Subtema creado con exito 😁',
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
        render: 'Ocurrio un error al crear el Subtema 😓',
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
      title='Manage Subtema'
      columns={columns}
      dataTable={dataTableSubtema}
      getRowId={(row) => row.id_sub}
      width='w-[1200px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar un nuevo Subtema
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Sub}
            type='number'
            placeholder='ID subtema'
            register={{ ...register('id_sub') }}
            errors={errors.id_sub}
          />

          <Input
            value={watch_Nombre_Subtema}
            type='text'
            placeholder='Nombre del Subtema'
            register={{ ...register('nombre_sub') }}
            errors={errors.nombre_sub}
          />

          <Input
            value={watch_Id_Tema}
            type='number'
            placeholder='ID Tema'
            register={{ ...register('id_tem') }}
            errors={errors.id_tem}
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

export default TableSubtema;
