import React, { FC } from 'react';
import { TableUser, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const DUserPage: FC = () => {
  return (
    <LayoutAdmin title='DUser' description='DUser'>
      <TableProvider>
        <TableUser />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default DUserPage;
