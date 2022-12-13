import { useEffect, useMemo, FC, useState } from 'react';
import { InteligenciaService } from 'services';
import { useTable } from 'views/Admin/hooks';

import { DataTable } from '../';
import { InteligenciaActions } from './Actions';

import { ICInteligencia } from 'interfaces/Entities';

import { SchemaInt } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';
import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsInteligencia {
  id_int: number;
  tipo_int: string;
  valida_int: number;
}

const customId = 'custom-id-TableInteligencia';

const TableInteligencia: FC = () => {
  const { rowId, dataTableInteligencia, setDataTableInteligencia, setRowId } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    InteligenciaService.getAll()
      .then(({ data }) => {
        if (data) {
          const inteligenciaData = data.map(
            ({ id_int, tipo_int, valida_int }) => {
              return {
                id_int,
                tipo_int,
                valida_int: valida_int,
              };
            }
          );
          setDataTableInteligencia(inteligenciaData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_int',
        headerName: 'ID',
        width: 60,
      },
      {
        field: 'tipo_int',
        headerName: 'Tipo de inteligencia',
        width: 290,
        editable: true,
      },
      {
        field: 'valida_int',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (
          data: GridCellParams<any, GridRowModel<RowsInteligencia>>
        ) => {
          const { row } = data;
          return (
            <InteligenciaActions
              id={row.id_int}
              tipo={row.tipo_int}
              valida={row.valida_int}
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
  } = useForm<ICInteligencia>({
    resolver: yupResolver(SchemaInt),
  });

  const watch_Id_Int = watch('id_int');

  const onSubmit = async ({ id_int, tipo_int, valida_int }: ICInteligencia) => {
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);
    const { data, message } = await InteligenciaService.create({
      id_int: Number(id_int),
      tipo_int,
      valida_int: 1,
    });

    if (data) {
      setDataTableInteligencia([
        ...dataTableInteligencia,
        { id_int: Number(id_int), tipo_int, valida_int: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Inteligencia creada con exito 😁',
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
        render: 'Ocurrio un error al crear la Inteligencia 😓',
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
      title='Manage Inteligencia'
      columns={columns}
      dataTable={dataTableInteligencia}
      getRowId={(row) => row.id_int}
      width='w-[560px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar una nueva Inteligencia
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Int}
            type='number'
            placeholder='ID inteligencia'
            register={{ ...register('id_int') }}
            errors={errors.id_int}
          />

          <Input
            value={watch_Id_Int}
            type='text'
            placeholder='Tipo de inteligencia'
            register={{ ...register('tipo_int') }}
            errors={errors.tipo_int}
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

export default TableInteligencia;
