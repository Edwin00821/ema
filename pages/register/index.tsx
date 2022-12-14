import { GetStaticProps, NextPage } from 'next';

import {
  initialState,
  RegisterContext,
  RegisterProvider,
} from 'views/RegisterPage/context';

import { GeneroService, SemestreService, EspecialidadService } from 'services';

import { ICGenero, ICSemestre, ICEspecialidad } from 'interfaces/Entities';

import { RegisterPage, LayoutRegister } from 'views/RegisterPage';

interface Props {
  dataGenero: ICGenero[];
  dataSemestre: ICSemestre[];
  dataEspecialidad: ICEspecialidad[];
}

const App: NextPage<Props> = ({
  dataGenero,
  dataSemestre,
  dataEspecialidad,
}) => {
  const valideteGen = dataGenero ?? initialState.dataGenero;
  const valideteSem = dataSemestre ?? initialState.dataSemestre;
  const valideteEs = dataEspecialidad ?? initialState.dataEspecialidad;

  return (
    <RegisterContext.Provider
      value={{
        ...initialState,
        ...RegisterProvider(),
        dataGenero: valideteGen,
        dataSemestre: valideteSem,
        dataEspecialidad: valideteEs,
      }}
    >
      <LayoutRegister title='Register' description='Register EMA'>
        <RegisterPage />
      </LayoutRegister>
    </RegisterContext.Provider>
  );
};

export default App;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const GeneroResponse = await GeneroService.getAll();
  const SemestreResponse = await SemestreService.getAll();
  const EspecialidadResponse = await EspecialidadService.getAll();

  return {
    props: {
      dataGenero: GeneroResponse?.data || null,
      dataSemestre: SemestreResponse?.data || null,
      dataEspecialidad: EspecialidadResponse?.data || null,
    },
  };
};
