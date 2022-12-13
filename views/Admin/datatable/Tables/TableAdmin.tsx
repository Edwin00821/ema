import { FC, useEffect, useMemo } from 'react';
import { Avatar } from '@mui/material';
import { AdminService } from 'services';

import { useTable } from 'views/Admin/hooks';
import { DataTable } from '../';
import { AdminActions } from './Actions';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsUser {
  num_empleado: string;
  correo_user: string;
  valida_adm: number | string;
}

const TableAdmin: FC = () => {
  const { rowId, dataTableAdmin, setDataTableAdmin, setRowId } = useTable();

  useEffect(() => {
    AdminService.getAll()
      .then(({ data }) => {
        if (data) {
          const adminData = data.map(({ num_empleado, user, valida_adm }) => {
            return {
              num_empleado,
              correo_user: user.correo_user,
              valida_adm: 1,
            };
          });
          setDataTableAdmin(adminData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'num_empleado',
        headerName: 'Employee Number',
        width: 170,
        // valueGetter: ({ row }: any) => row.persona.nombre_per,
      },
      { field: 'correo_user', headerName: 'Email', width: 300 },

      {
        field: 'valida_adm',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsUser>>) => {
          console.log({ data });

          const { row } = data;
          return (
            <AdminActions
              num_empleado={row.num_empleado}
              valida_adm={row.valida_adm}
              rowId={rowId}
              setRowId={setRowId}
              {...row}
            />
          );
        },
      },
    ],
    [rowId]
  );

  return (
    <DataTable
      title='Manage User'
      columns={columns}
      dataTable={dataTableAdmin}
      getRowId={(row) => row.correo_user}
      width='w-[900px]'
      // childrenForm={
      // 	<form className='space-y-6' action='#'>
      // 		<div>
      // 			<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
      // 				Nombre
      // 			</label>
      // 			<input
      // 				type='text'
      // 				name='Nombre'
      // 				id='Nombre'
      // 				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      // 				placeholder='Nombre'
      // 				required
      // 			/>
      // 		</div>
      // 		<div>
      // 			<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
      // 				Email
      // 			</label>
      // 			<input
      // 				type='text'
      // 				name='Email'
      // 				id='Email'
      // 				placeholder='Email'
      // 				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      // 				required
      // 			/>
      // 		</div>
      // 		<div>
      // 			<label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
      // 				Rol
      // 			</label>
      // 			<input
      // 				type='text'
      // 				name='Rol'
      // 				id='Rol'
      // 				placeholder='Rol'
      // 				className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
      // 				required
      // 			/>
      // 		</div>
      // 		<div className='flex items-start'>
      // 			<div className='flex h-5 items-center'>
      // 				<input
      // 					id='activa'
      // 					type='checkbox'
      // 					value=''
      // 					className='focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
      // 					required
      // 				/>
      // 			</div>
      // 			<label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
      // 				Activa
      // 			</label>
      // 		</div>
      // 		<button
      // 			type='submit'
      // 			className='w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700'
      // 		>
      // 			Agregar
      // 		</button>
      // 	</form>
      // }
    />
  );
};

export default TableAdmin;
