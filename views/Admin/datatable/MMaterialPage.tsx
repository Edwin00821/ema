import React, {FC} from 'react';
import { TableMaterial, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

// interface Props {
//   url: string;
// }
const MMaterialPage : FC = () => {
  return (
    <LayoutAdmin title='MMaterial' description='MMaterial'>
      <TableProvider>
        <TableMaterial />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default MMaterialPage;
