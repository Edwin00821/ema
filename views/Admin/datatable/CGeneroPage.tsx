import React, { FC } from 'react';
import { TableGenero, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CGeneroPage: FC = () => {
  return (
    <LayoutAdmin title='CGenero' description='CGenero'>
      <TableProvider>
        <TableGenero />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CGeneroPage;
