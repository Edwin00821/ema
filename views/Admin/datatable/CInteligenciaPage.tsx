import React, { FC } from 'react';
import { TableInteligencia, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CInteligenciaPage: FC = () => {
  return (
    <LayoutAdmin title='CInteligencia' description='CInteligencia'>
      <TableProvider>
        <TableInteligencia />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CInteligenciaPage;
