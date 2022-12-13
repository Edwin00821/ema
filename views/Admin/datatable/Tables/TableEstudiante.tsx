import { FC, useEffect, useMemo, useState } from 'react';

import { EstudianteService } from 'services';

import { IMEstudianteReq } from 'interfaces/Entities';

import { useTable } from 'views/Admin/hooks';
import { EstudianteActions } from './Actions';
import { DataTable } from '../';

import { SchemaEst } from 'utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { toast, toastConfig } from 'libs';
import { Input } from 'components/Forms';
import Loader from 'components/Loader';

const customId = 'custom-id-TableEstudiante';

const TableEstudiante: FC = () => {
  const { rowId, setRowId, dataTableEstudiante, setDataTableEstudiante } =
    useTable();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    EstudianteService.getAll()
      .then(({ data }) => {
        if (data) {
          const estudianteData = data.map(
            ({ boleta_est, user, especialidad, semestre, valida_est }) => {
              return {
                boleta_est,
                correo_user: user?.correo_user,
                tipo_sem: semestre?.tipo_sem,
                tipo_es: especialidad?.nombre_es,
                valida_est: valida_est,
              };
            }
          );
          setDataTableEstudiante(estudianteData);
        }
      })
      .catch(console.log);
  }, []);

  const columns = useMemo(
    () => [
      {
        field: 'boleta_est',
        headerName: 'Boleta',
        width: 60,
      },
      {
        field: 'correo_user',
        headerName: 'Correo',
        width: 290,
        editable: true,
      },

      {
        field: 'nombre_es',
        headerName: 'Especialidad',
        width: 290,
        editable: true,
      },
      {
        field: 'valida_est',
        headerName: 'Active',
        width: 100,
        type: 'boolean',
        editable: true,
      },
      {
        field: 'tipo_sem',
        headerName: 'Semestre',
        width: 290,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        renderCell: ({ row }: any) => {
          return (
            <EstudianteActions
              boleta={row.boleta_est}
              correo={row.correo_user}
              id_es={row.id_es}
              id_sem={row.id_sem}
              valida={row.valida_est}
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
  } = useForm<IMEstudianteReq>({
    resolver: yupResolver(SchemaEst),
  });

  const watch_Id_Est = watch('boleta_est');
  const watch_Correo_Estudiante = watch('correo_user');
  const watch_Id_Especialidad = watch('id_es');
  const watch_Id_Semestre = watch('id_sem');

  const onSubmit = async ({
    boleta_est,
    correo_user,
    id_es,
    id_sem,
    valida_est,
  }: IMEstudianteReq) => {
    const id = toast.loading('Validando datos...', {
      autoClose: 2000,
      theme: 'light',
      position: 'top-right',
      ...toastConfig,
    });

    setLoading(true);
    const { data, message } = await EstudianteService.create({
      id_es: Number(id_es),
      id_sem: Number(id_sem),
      boleta_est,
      correo_user,
      valida_est: 1,
    });

    if (data) {
      setDataTableEstudiante([
        ...dataTableEstudiante,
        {
          id_es: Number(id_es),
          id_sem,
          boleta_est,
          correo_user,
          valida_est: 1,
        },
      ]);
      reset();

      toast.update(customId, {
        render: 'Estudiante creado con exito 😁',
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
        render: 'Ocurrio un error al crear el Estudiante 😓',
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
      title='Manage Estudiantes'
      columns={columns}
      dataTable={dataTableEstudiante}
      getRowId={(row) => row.boleta_est}
      width='w-[1150px]'
    ></DataTable>
  );
};

export default TableEstudiante;
