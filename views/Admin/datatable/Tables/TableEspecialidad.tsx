import { FC, useEffect, useMemo, useState } from 'react';
import { useTable } from 'views/Admin/hooks';

import { ICEspReq } from 'interfaces/Entities/ICEspecialidad';
import { EspecialidadService } from 'services';

import { DataTable } from '../';
import { EspecialidadActions } from './Actions';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaEsp } from 'utils';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsEspecialidad {
  id_es: number;
  nombre_es: string;
  valida_es: number;
}

const customId = 'custom-id-TableEspecialidad';

const TableEspecialidad: FC = () => {
  const { rowId, dataTableEspecialidad, setDataTableEspecialidad, setRowId } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    EspecialidadService.getAll()
      .then(({ data }) => {
        if (data) {
          const especialidadData = data.map(
            ({ id_es, nombre_es, valida_es }) => {
              return {
                id_es,
                nombre_es,
                valida_es,
              };
            }
          );
          setDataTableEspecialidad(especialidadData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_es',
        headerName: 'id',
        width: 60,
      },
      {
        field: 'nombre_es',
        headerName: 'Nombre de especialidad',
        width: 290,
        editable: true,
      },
      {
        field: 'valida_es',
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
          data: GridCellParams<any, GridRowModel<RowsEspecialidad>>
        ) => {
          const { row } = data;
          return (
            <EspecialidadActions
              id={row.id_es}
              nombre={row.nombre_es}
              valida={row.valida_es}
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
  } = useForm<ICEspReq>({
    resolver: yupResolver(SchemaEsp),
  });

  const watch_Id_Es = watch('id_es');
  const watch_Nombre_Especialidad = watch('nombre_es');

  const onSubmit = async (dataForm: ICEspReq) => {
    const { id_es, nombre_es } = dataForm;

    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    setLoading(true);

    const { data, message } = await EspecialidadService.create({
      id_es: Number(id_es),
      nombre_es,
      valida_es: 1,
    });

    if (data) {
      setDataTableEspecialidad([
        ...dataTableEspecialidad,
        { id_es: Number(id_es), nombre_es, valida_es: 1 },
      ]);
      reset();

      toast.update(customId, {
        render: 'Especialidad creado con exito 😁',
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
        render: 'Ocurrio un error al crear la especialidad 😓',
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
      title='Manage Especialidad'
      columns={columns}
      dataTable={dataTableEspecialidad}
      getRowId={(row) => row.id_es}
      width='w-[560px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar una nueva Especialdad
        </p>
        <div className='w-full'>
          <Input
            value={watch_Id_Es}
            type='number'
            placeholder='ID Especialidad'
            register={{ ...register('id_es') }}
            errors={errors.id_es}
          />

          <Input
            value={watch_Nombre_Especialidad}
            type='text'
            placeholder='Nombre Especialidad'
            register={{ ...register('nombre_es') }}
            errors={errors.nombre_es}
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
export default TableEspecialidad;
