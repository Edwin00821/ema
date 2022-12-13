import React, { FC } from 'react';
import { TableEspecialidad, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CEspecialidadPage: FC = () => {
  return (
    <LayoutAdmin title='CEspecialidad' description='CEspecialidad'>
      <TableProvider>
        <TableEspecialidad />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CEspecialidadPage;
