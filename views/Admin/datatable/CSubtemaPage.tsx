import React, { FC } from 'react';
import { TableSubtema, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CSubtemaPage: FC = () => {
  return (
    <LayoutAdmin title='CSubtema' description='CSubtema'>
      <TableProvider>
        <TableSubtema />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CSubtemaPage;
