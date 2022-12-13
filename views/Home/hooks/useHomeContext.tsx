import { HomeContext } from '../Context';
import { useContext } from 'react';

const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error('useHomeContext must be used within a HomeProvider');
  }
  return context;
};

export default useHomeContext;
