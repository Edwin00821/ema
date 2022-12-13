import React, { FC } from 'react';
import { TableEstudiante, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

// interface Props {
//   url: string;
// }
const MEstudiantePage: FC = () => {
  return (
    <LayoutAdmin title='MEstudiante' description='MEstudiante'>
      <TableProvider>
        <TableEstudiante />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default MEstudiantePage;
