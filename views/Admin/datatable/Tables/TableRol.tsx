import React, { useEffect, useMemo, FC, useState } from 'react';
import { RolService } from 'services';
import { useTable } from 'views/Admin/hooks';
import { DataTable } from '../';
import { RolActions } from './Actions';

import { ICRolReq } from 'interfaces/Entities';

import { SchemasRol } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsRol {
  id_rol: number;
  tipo_rol: string;
  valida_rol: number | string;
}

const customId = 'custom-id-TableRol';

const TableRol = (): JSX.Element => {
  const { rowId, dataTableRol, setDataTableRol, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    RolService.getAll().then(({ data }) => {
      if (data) setDataTableRol(data);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_rol',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'tipo_rol',
        headerName: 'Tipo del rol',
        width: 290,
      },
      {
        field: 'valida_rol',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsRol>>) => {
          const { row } = data;
          return (
            <RolActions
              id={row.id_rol}
              tipo={row.tipo_rol}
              valida={row.valida_rol}
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
  } = useForm<ICRolReq>({
    resolver: yupResolver(SchemasRol),
  });

  const watch_Id_Rol = watch('id_rol');
  const watch_Tipo_Rol = watch('tipo_rol');

  const onSubmit = async ({ id_rol, tipo_rol, valida_rol }: ICRolReq) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await RolService.create({
      id_rol: Number(id_rol),
      tipo_rol,
      valida_rol: 1,
    });

    if (data) {
      setDataTableRol([
        ...dataTableRol,
        { id_rol: Number(id_rol), tipo_rol, valida_rol: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Rol creado con exito 😁',
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
        render: 'Ocurrio un error al crear el rol 😓',
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
      title='Manage Rol'
      columns={columns}
      dataTable={dataTableRol}
      getRowId={(row) => row.id_rol}
      width='w-[560px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>Agregar un nuevo Rol</p>
        <div className='w-full'>
          <Input
            value={watch_Id_Rol}
            type='number'
            placeholder='ID Rol'
            register={{ ...register('id_rol') }}
            errors={errors.id_rol}
          />

          <Input
            value={watch_Tipo_Rol}
            type='text'
            placeholder='Tipo de Rol'
            register={{ ...register('tipo_rol') }}
            errors={errors.tipo_rol}
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

export default TableRol;
