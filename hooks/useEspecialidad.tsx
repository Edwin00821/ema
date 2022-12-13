import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ICEspecialidad } from 'interfaces/Entities';
import type { selectData } from 'typings';

const defaultEspecialidad: selectData = {
  value: null,
  name: 'Escoge una especialidad',
};

type useEspecialidadT = (dataEspecialidad: ICEspecialidad[]) => {
  optionsEspecialidad: selectData[];
  selectedEspecialidad: selectData;
  defaultEspecialidad: selectData;
  setSelectedEspecialidad: Dispatch<SetStateAction<selectData>>;
}

const useEspecialidad: useEspecialidadT = (dataEspecialidad) => {
  const [optionsEspecialidad, setOptionsEspecialidad] = useState<selectData[]>(
    []
  );

  const [selectedEspecialidad, setSelectedEspecialidad] =
    useState<selectData>(defaultEspecialidad);

  useEffect(() => {
    const options = dataEspecialidad.map<selectData>(({ id_es, nombre_es }) => ({
      value: id_es,
      name: nombre_es,
    }));
    setOptionsEspecialidad(options);
  }, []);

  return {
    optionsEspecialidad,
    selectedEspecialidad,
    defaultEspecialidad,
    setSelectedEspecialidad,
  };
};

export default useEspecialidad;
