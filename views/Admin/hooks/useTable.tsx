import { useContext } from 'react';
import { TableContext } from '../context/TableContext';

const useTable = () => {
  const Context = useContext(TableContext);
  if (!Context) {
    throw new Error('useTable must be used within a TableProvider');
  }

  return Context;
};

export default useTable;
