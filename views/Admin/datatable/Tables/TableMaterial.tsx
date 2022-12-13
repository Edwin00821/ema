import { GridCellParams, GridRowModel } from '@mui/x-data-grid';
import { useEffect, useMemo, FC, useState } from 'react';
import { MaterialService } from 'services';

import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { MaterialActions } from './Actions';

import { IMMaterial } from 'interfaces/Entities';

import { SchemaMat } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

interface RowsMaterial {
  id_mat: number;
  url_mat: string;
  valida_mat: number;
  id_sub: number;
}

const TableMaterial: FC = () => {
  const { rowId, dataTableMaterial, setDataTableMaterial, setRowId } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    MaterialService.getAll()
      .then(({ data }) => {
        if (data) {
          const materialData = data.map(
            ({ id_mat, url_mat, valida_mat, subtema }) => {
              return {
                id_mat,
                url_mat,
                valida_mat,
                id_sub: subtema?.id_sub,
              };
            }
          );
          setDataTableMaterial(materialData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_mat',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'url_mat',
        headerName: 'URL de Material',
        width: 290,
      },
      {
        field: 'id_sub',
        headerName: 'ID de subtema',
        width: 290,
      },
      {
        field: 'valida_mat',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsMaterial>>) => {
          const { row } = data;
          return (
            <MaterialActions
              id={row.id_mat}
              url={row.url_mat}
              valida={row.valida_mat}
              id_sub={row.id_sub}
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
  } = useForm<IMMaterial>({
    resolver: yupResolver(SchemaMat),
  });

  const watch_Id_Mat = watch('id_mat');
  const watch_URL_Mat = watch('url_mat');
  const watch_Id_Sub = watch('id_sub');

  const onSubmit = async ({
    id_mat,
    url_mat,
    id_sub,
    valida_mat,
  }: IMMaterial) => {
    const id = toast.loading('Validando datos...', {
      autoClose: 2000,
      theme: 'light',
      position: 'top-right',
      ...toastConfig,
    });

    setLoading(true);
    const MaterialResponse = await MaterialService.create({
      id_mat: Number(id_mat),
      url_mat,
      id_sub: Number(id_sub),
      valida_mat: 1,
    });
    console.log({ MaterialResponse });

    setLoading(false);
  };

  return (
    <DataTable
      title='Manage Material'
      columns={columns}
      dataTable={dataTableMaterial}
      getRowId={(row) => row.id_mat}
      width='w-[870px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar un nuevo material
        </p>
        <div>
          <Input
            value={watch_Id_Mat}
            type='number'
            placeholder='ID material'
            register={{ ...register('id_mat') }}
            errors={errors.id_mat}
          />

          <Input
            value={watch_URL_Mat}
            type='text'
            placeholder='URL de material'
            register={{ ...register('url_mat') }}
            errors={errors.url_mat}
          />

          <Input
            value={watch_Id_Sub}
            type='number'
            placeholder='ID Subtema'
            register={{ ...register('id_sub') }}
            errors={errors.id_sub}
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

export default TableMaterial;
