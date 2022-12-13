import React, { FC } from 'react';
import { TablePersona, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

// interface Props {
//   url: string;
// }
const MPersonaPage: FC = () => {
  return (
    <LayoutAdmin title='MPersona' description='MPersona'>
      <TableProvider>
        <TablePersona />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default MPersonaPage;
