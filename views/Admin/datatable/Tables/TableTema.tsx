import React, { useEffect, useMemo, useState } from 'react';
import { TemaService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { TemaActions } from './Actions';

import { ICTemaReq } from 'interfaces/Entities';

import { SchemaTem } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsTema {
  id_tem: number;
  nombre_tem: string;
  id_ua: number;
  id_semesp: number;
  id_par: number;
  valida_tem: number | string;
}

const customId = 'custom-id-TableEspecialidad';

const TableTema = () => {
  const { rowId, dataTableTema, setDataTableTema, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    TemaService.getAll().then(({ data }) => {
      if (data) setDataTableTema(data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_tem',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'nombre_tem',
        headerName: 'Tema',
        width: 600,
      },
      {
        field: 'id_par',
        headerName: 'ID Parcial',
        width: 190,
      },
      {
        field: 'id_ua',
        headerName: 'ID Uaprendizaje',
        width: 190,
      },
      {
        field: 'id_semesp',
        headerName: 'ID SemestreEsp',
        width: 190,
      },
      {
        field: 'valida_tem',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsTema>>) => {
          const { row } = data;
          return (
            <TemaActions
              id={row.id_tem}
              nombre={row.nombre_tem}
              valida={row.valida_tem}
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
  } = useForm<ICTemaReq>({
    resolver: yupResolver(SchemaTem),
  });

  const watch_Id_Tema = watch('id_tem');
  const watch_Nombre_Tema = watch('nombre_tem');
  const watch_Id_Parcial = watch('id_par');
  const watch_Id_UA = watch('id_ua');

  const onSubmit = async ({
    id_tem,
    nombre_tem,
    id_par,
    id_ua,
    valida_tem,
  }: ICTemaReq) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await TemaService.create({
      id_tem: Number(id_tem),
      nombre_tem,
      id_par: Number(id_par),
      id_ua: Number(id_ua),
      valida_tem: 1,
    });

    if (data) {
      setDataTableTema([
        ...dataTableTema,
        { id_tem: Number(id_tem), nombre_tem, id_par, id_ua, valida_tem: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Tema creado con exito 😁',
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
        render: 'Ocurrio un error al crear la tema 😓',
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
      title='Manage Tema'
      columns={columns}
      dataTable={dataTableTema}
      getRowId={(row) => row.id_tem}
      width='w-[1500px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>Agregar un nuevo Tema</p>
        <div className='w-full'>
          <Input
            value={watch_Id_Tema}
            type='number'
            placeholder='ID Tema'
            register={{ ...register('id_tem') }}
            errors={errors.id_tem}
          />

          <Input
            value={watch_Nombre_Tema}
            type='text'
            placeholder='Nombre del Tema'
            register={{ ...register('nombre_tem') }}
            errors={errors.nombre_tem}
          />

          <Input
            value={watch_Id_Parcial}
            type='number'
            placeholder='ID Parcial'
            register={{ ...register('id_par') }}
            errors={errors.id_par}
          />

          <Input
            value={watch_Id_UA}
            type='number'
            placeholder='ID Uaprendizaje'
            register={{ ...register('id_ua') }}
            errors={errors.id_ua}
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

export default TableTema;
