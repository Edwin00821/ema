import { FC, useEffect, useMemo, useState } from 'react';

import { useTable } from 'views/Admin/hooks';
import { PersonaService } from 'services';
import { IMPersonaReq } from 'interfaces/Entities';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaPer } from 'utils';

import { toast, toastConfig } from 'libs';

import { PersonaActions } from './Actions';
import { Input } from 'components/Forms';
import { DataTable } from '../';
import Loader from 'components/Loader';

import { GridCellParams, GridRowModel } from '@mui/x-data-grid';

interface RowsPersona {
  id_per: number;
  nombre_per: string;
  appat_per: string;
  apmat_per: string;
  fecha_de_nacimiento_per: Date;
  id_gen: number;
  id_int: number;
  valida_per: number;
}
const TablePersona: FC = () => {
  const { rowId, dataTablePersona, setDataTablePersona, setRowId } = useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    PersonaService.getAll()
      .then(({ data }) => {
        if (data) {
          const personaData = data.map(
            ({
              id_per,
              nombre_per,
              appat_per,
              apmat_per,
              fecha_de_nacimiento_per,
              genero,
              inteligencia,
              valida_per,
            }) => {
              return {
                id_per,
                nombre_per,
                appat_per,
                apmat_per,
                fecha_de_nacimiento_per,
                id_gen: genero?.id_gen,
                id_int: inteligencia?.id_int,

                valida_per,
              };
            }
          );
          setDataTablePersona(personaData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'id_per',
        headerName: 'ID',
        width: 170,
        // valueGetter: ({ row }: any) => row.persona.id_per,
      },

      {
        field: 'nombre_per',
        headerName: 'Name',
        width: 170,
        // valueGetter: ({ row }: any) => row.persona.nombre_per,
      },
      {
        field: 'appat_per',
        headerName: 'Last Name',
        width: 170,
        // valueGetter: ({ row }: any) => row.persona.appat_per,
      },
      {
        field: 'apmat_per',
        headerName: 'Last Name',
        width: 170,
        //    valueGetter: ({ row }: any) => row.persona.apmat_per,
      },
      {
        field: 'fecha_de_nacimiento_per',
        headerName: 'Birthday',
        width: 170,
        //  valueGetter: ({ row }: any) => row.persona.fecha_de_nacimiento_per,
      },
      {
        field: 'valida_per',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'id_gen',
        headerName: 'ID Genero',
        width: 170,
        //  valueGetter: ({ row }: any) => row.persona.fecha_de_nacimiento_per,
      },
      {
        field: 'id_int',
        headerName: 'ID Inteligencia',
        width: 170,
        //  valueGetter: ({ row }: any) => row.persona.fecha_de_nacimiento_per,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: (data: GridCellParams<any, GridRowModel<RowsPersona>>) => {
          const { row } = data;
          return (
            <PersonaActions
              id={row.id_per}
              nombre={row.nombre_per}
              appat={row.appat_per}
              apmat={row.apmat_per}
              birthday={row.fecha_de_nacimiento_per}
              valida={row.valida_per}
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
  } = useForm<IMPersonaReq>({
    resolver: yupResolver(SchemaPer),
  });

  const watch_Id_Per = watch('id_per');
  const watch_Nombre_Per = watch('nombre_per');
  const watch_ApPat_Per = watch('appat_per');
  const watch_ApMat_Per = watch('apmat_per');
  const watch_B_Date_Per = watch('fecha_de_nacimiento_per');
  const watch_Id_Gen = watch('id_gen');
  const watch_Id_Int = watch('id_int');

  const onSubmit = async ({
    id_per,
    nombre_per,
    appat_per,
    apmat_per,
    fecha_de_nacimiento_per,
    id_gen,
    id_int,
    valida_per,
  }: IMPersonaReq) => {
    const id = toast.loading('Validando datos...', {
      autoClose: 2000,
      theme: 'light',
      position: 'top-right',
      ...toastConfig,
    });

    setLoading(true);
    const PersonaResponse = await PersonaService.create({
      id_per: Number(id_per),
      nombre_per,
      appat_per,
      apmat_per,
      fecha_de_nacimiento_per,
      id_gen,
      id_int,
      valida_per: 1,
    });
    console.log({ PersonaResponse });

    setLoading(false);
  };

  return (
    <DataTable
      title='Manage Persona'
      columns={columns}
      dataTable={dataTablePersona}
      getRowId={(row) => row.id_per}
      width='w-[560px]'
    >
      <form
        className='flex flex-col items-center justify-between gap-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className='text-center text-2xl font-bold'>
          Agregar una nueva Persona
        </p>
        <div>
          <Input
            value={watch_Id_Per}
            type='number'
            placeholder='ID Persona'
            register={{ ...register('id_per') }}
            errors={errors.id_per}
          />

          <Input
            value={watch_Nombre_Per}
            type='text'
            placeholder='Nombre de Persona'
            register={{ ...register('nombre_per') }}
            errors={errors.nombre_per}
          />

          <Input
            value={watch_ApPat_Per}
            type='text'
            placeholder='Apellido Paterno'
            register={{ ...register('appat_per') }}
            errors={errors.appat_per}
          />

          <Input
            value={watch_ApMat_Per}
            type='text'
            placeholder='Apellido Materno'
            register={{ ...register('apmat_per') }}
            errors={errors.apmat_per}
          />

          <Input
            value={watch_B_Date_Per}
            type='date'
            placeholder='Fecha de Nacimiento'
            register={{ ...register('fecha_de_nacimiento_per') }}
            errors={errors.fecha_de_nacimiento_per}
          />

          <Input
            value={watch_Id_Gen}
            type='text'
            placeholder='ID Genero'
            register={{ ...register('id_gen') }}
            errors={errors.id_gen}
          />

          <Input
            value={watch_Id_Int}
            type='text'
            placeholder='ID Inteligencia'
            register={{ ...register('id_int') }}
            errors={errors.id_int}
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

export default TablePersona;

// function setLoading(arg0: boolean) {
//   throw new Error('Function not implemented.');
// }
