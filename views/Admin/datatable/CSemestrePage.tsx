import React, { FC } from 'react';
import { TableSemestre, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CSemestrePage: FC = () => {
  return (
    <LayoutAdmin title='CSemestre' description='CSemestre'>
      <TableProvider>
        <TableSemestre />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CSemestrePage;
