import React, { FC } from 'react';
import { TableRol, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';


const CRolPage: FC = () => {
  return (
    <LayoutAdmin title='CRol' description='CRol'>
      <TableProvider>
        <TableRol />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CRolPage;
