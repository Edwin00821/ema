import React, { FC } from 'react';
import { TableUaprendizaje, LayoutAdmin } from 'views/Admin';
import { TableProvider } from '../context';

const CUaprendizajePage: FC = () => {
  return (
    <LayoutAdmin title='CUaprendizaje' description='CUaprendizaje'>
      <TableProvider>
        <TableUaprendizaje />
      </TableProvider>
    </LayoutAdmin>
  );
};

export default CUaprendizajePage;