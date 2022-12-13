import React, { FC } from 'react';
import { TableTema, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CTemaPage: FC = () => {
  return (
    <LayoutAdmin title='CTema' description='CTema'>
      <TableProvider>
        <TableTema />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CTemaPage;