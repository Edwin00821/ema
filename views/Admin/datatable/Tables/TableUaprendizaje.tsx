import React, { useEffect, useMemo, useState } from 'react';
import { UAprendizajeService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { UAprendizajeActions } from './Actions';

import { ICUaprendizajeReq } from 'interfaces/Entities';

import { SchemaUap } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsUA {
  id_ua: number;
  nombre_ua: string;
  id_semesp: number;
  valida_ua: number | string;
}

const customId = 'custom-id-TableUaprendizaje';

const TableUaprendizaje = () => {
  const { rowId, dataTableUaprendizaje, setDataTableUaprendizaje, setRowId } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UAprendizajeService.getAll().then(({ data }) => {
      if (data) setDataTableUaprendizaje(data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_ua',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'nombre_ua',
        headerName: 'Unidad de Aprendizaje',
        width: 400,
      },
      {
        field: 'id_semesp',
        headerName: 'ID Semesp',
        width: 290,
      },
      {
        field: 'valida_ua',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsUA>>) => {
          const { row } = data;

          return (
            <UAprendizajeActions
              id={row.id_ua}
              nombre={row.nombre_ua}
              valida={row.valida_ua}
              id_semesp={row.id_semesp}
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
  } = useForm<ICUaprendizajeReq>({
    resolver: yupResolver(SchemaUap),
  });

  const watch_Id_UA = watch('id_ua');
  const watch_Nombre_UA = watch('nombre_ua');
  const watch_Id_Semesp = watch('id_semesp');

  const onSubmit = async ({
    id_ua,
    nombre_ua,
    id_semesp,
    valida_ua,
  }: ICUaprendizajeReq) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await UAprendizajeService.create({
      id_ua: Number(id_ua),
      nombre_ua,
      id_semesp,
      valida_ua: 1,
    });

    if (data) {
      setDataTableUaprendizaje([
        ...dataTableUaprendizaje,
        { id_ua: Number(id_ua), nombre_ua, id_semesp, valida_ua: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Unidad de Aprendizaje creada con exito 😁',
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
        render: 'Ocurrio un error al crear la Unidad de Aprendizaje 😓',
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
      title='Manage UAprendizaje'
      columns={columns}
      dataTable={dataTableUaprendizaje}
      getRowId={(row) => row.id_ua}
      width='w-[1000px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar un nueva Unidad de Aprendizaje
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_UA}
            type='number'
            placeholder='ID UAprendizaje'
            register={{ ...register('id_ua') }}
            errors={errors.id_ua}
          />

          <Input
            value={watch_Nombre_UA}
            type='text'
            placeholder='Nombre de la UA'
            register={{ ...register('nombre_ua') }}
            errors={errors.nombre_ua}
          />

          <Input
            value={watch_Id_Semesp}
            type='number'
            placeholder='ID Sem-Esp'
            register={{ ...register('id_semesp') }}
            errors={errors.id_semesp}
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

export default TableUaprendizaje;
