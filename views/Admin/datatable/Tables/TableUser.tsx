import { FC, useEffect, useMemo } from 'react';
import { Avatar } from '@mui/material';
import { UsuarioService } from 'services';

import { useTable } from 'views/Admin/hooks';
import { DataTable } from '../';
import { UserActions } from './Actions';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsUser {
  correo_user: string;
  id_per: number;
  nombre_per: string;
  id_rol: number;
  tipo_rol: string;
  valida_user: number | string;
}

const TableUser: FC = () => {
  const { rowId, dataTableUser, setDataTableUser, setRowId } = useTable();

  useEffect(() => {
    UsuarioService.getAll()
      .then(({ data }) => {
        if (data) {
          const userData = data.map(
            ({ correo_user, persona, rol, valida_user }) => {
              return {
                nombre_per: persona?.nombre_per,
                correo_user,
                tipo_rol: rol?.tipo_rol,
                valida_user: valida_user,
              };
            }
          );
          setDataTableUser(userData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'photoURL',
        headerName: 'Avatar',
        width: 60,
        renderCell: () => <Avatar src={'/img/user.png'} />,
        sortable: false,
        filterable: false,
      },
      {
        field: 'nombre_per',
        headerName: 'Name',
        width: 170,
        // valueGetter: ({ row }: any) => row.persona.nombre_per,
      },
      { field: 'correo_user', headerName: 'Email', width: 300 },
      {
        field: 'tipo_rol',
        headerName: 'Role',
        width: 130,
        type: 'singleSelect',
        valueOptions: ['Admin', 'Estudiante'],
        // valueGetter: ({ row }: any) => row.rol.tipo_rol,

        editable: true,
      },
      {
        field: 'valida_user',
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
          const { row } = data;
          return (
            <UserActions
              id_per={row.id_per}
              id_rol={row.id_rol}
              password_user={''}
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
      dataTable={dataTableUser}
      getRowId={(row) => row.correo_user}
      width='w-[900px]'
    />
  );
};

export default TableUser;
