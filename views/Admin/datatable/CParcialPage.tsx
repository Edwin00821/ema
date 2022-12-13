import React, { FC } from 'react';
import { TableParcial, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CParcialPage: FC = () => {
  return (
    <LayoutAdmin title='CParcial' description='CParcial'>
      <TableProvider>
        <TableParcial />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CParcialPage;
