import React, { useEffect, useMemo, FC, useState } from 'react';

import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { GeneroActions } from './Actions';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { ICGeneroReq } from 'interfaces/Entities';
import { GeneroService } from 'services';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { SchemaGen } from 'utils';
import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsGenero {
  id_gen: number;
  tipo_gen: string;
  valida_gen: number;
}

const customId = 'custom-id-TableGenero';

const TableGenero: FC = () => {
  const { rowId, dataTableGenero, setDataTableGenero, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GeneroService.getAll()
      .then(({ data }) => {
        if (data) {
          const generoData = data.map(({ id_gen, tipo_gen, valida_gen }) => {
            return {
              id_gen,
              tipo_gen,
              valida_gen,
            };
          });
          setDataTableGenero(generoData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_gen',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'tipo_gen',
        headerName: 'Tipo de Genero',
        width: 230,
        editable: false,
      },
      {
        field: 'valida_gen',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsGenero>>) => {
          const { row } = data;
          return (
            <GeneroActions
              id={row.id_gen}
              tipo={row.tipo_gen}
              valida={row.valida_gen}
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
    reset,
    formState: { errors },
  } = useForm<ICGeneroReq>({
    resolver: yupResolver(SchemaGen),
  });

  const watch_Id_Gen = watch('id_gen');
  const watch_Tipo_Gen = watch('tipo_gen');

  const onSubmit = async (dataForm: ICGeneroReq) => {
    const { id_gen, tipo_gen } = dataForm;

    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await GeneroService.create({
      id_gen: Number(id_gen),
      tipo_gen,
      valida_gen: 1,
    });

    if (data) {
      setDataTableGenero([
        ...dataTableGenero,
        { id_gen, tipo_gen, valida_gen: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Genero creado con exito 😁',
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
        render: 'Ocurrio un error al crear el genero 😓',
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
      title='Manage Genero'
      columns={columns}
      dataTable={dataTableGenero}
      getRowId={(row) => row.id_gen}
      width='w-[530px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar una nuevo Genero
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Gen}
            type='number'
            placeholder='ID Genero'
            register={{ ...register('id_gen') }}
            errors={errors.id_gen}
          />

          <Input
            value={watch_Tipo_Gen}
            type='text'
            placeholder='Nombre Genero'
            register={{ ...register('tipo_gen') }}
            errors={errors.tipo_gen}
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

export default TableGenero;
