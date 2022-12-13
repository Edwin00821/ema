import React, { useEffect, useMemo, FC, useState } from 'react';
import { ParcialService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { ParcialActions } from './Actions';

import { ICParcial } from 'interfaces/Entities';

import { SchemasPar } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';

import { Input } from 'components/Forms';
import Loader from 'components/Loader';
import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsParcial {
  id_par: number;
  nombre_par: string;
  valida_par: number;
}

const customId = 'custom-id-TableParcial';

const TableParcial: FC = () => {
  const { rowId, dataTableParcial, setDataTableParcial, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ParcialService.getAll()
      .then(({ data }) => {
        if (data) {
          const parcialData = data.map(({ id_par, nombre_par, valida_par }) => {
            return {
              id_par,
              nombre_par,
              valida_par,
            };
          });
          setDataTableParcial(parcialData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_par',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'nombre_par',
        headerName: 'Nombre de parcial',
        width: 290,
      },
      {
        field: 'valida_par',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsParcial>>) => {
          const { row } = data;
          return (
            <ParcialActions
              id={row.id_par}
              nombre={row.nombre_par}
              valida={row.valida_par}
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
  } = useForm<ICParcial>({
    resolver: yupResolver(SchemasPar),
  });

  const watch_Id_Par = watch('id_par');
  const watch_Nombre_Par = watch('nombre_par');

  const onSubmit = async ({ id_par, nombre_par }: ICParcial) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await ParcialService.create({
      id_par: Number(id_par),
      nombre_par,
      valida_par: 1,
    });
    console.log({ data, message });

    if (data) {
      setDataTableParcial([
        ...dataTableParcial,
        { id_par: Number(id_par), nombre_par, valida_par: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Parcial creado con exito 😁',
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
        render: 'Ocurrio un error al crear el Parcial 😓',
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
      title='Manage Parcial'
      columns={columns}
      dataTable={dataTableParcial}
      getRowId={(row) => row.id_par}
      width='w-[560px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar un nuevo Parcial
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Par}
            type='number'
            placeholder='ID Parcial'
            register={{ ...register('id_par') }}
            errors={errors.id_par}
          />

          <Input
            value={watch_Nombre_Par}
            type='text'
            placeholder='Nombre del Parcial'
            register={{ ...register('nombre_par') }}
            errors={errors.nombre_par}
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

export default TableParcial;
