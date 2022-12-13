import React, { FC } from 'react';
import { TextHeader } from './';

const SchuduleHeader: FC = () => {
  return (
    <>
      <TextHeader title='Hora' />
      <TextHeader title='Lunes' />
      <TextHeader title='Martes' />
      <TextHeader title='Miercoles' />
      <TextHeader title='Jueves' />
      <TextHeader title='Viernes' />
    </>
  );
};

export default SchuduleHeader;
