import { useContext } from 'react';
import { RegisterContext } from '../context';

const useContextRegister = () => {
  const registerContext = useContext(RegisterContext);
  if (!registerContext)
    throw new Error(
      'useContextRegister must be used within a RegisterProvider'
    );
  return registerContext;
};

export default useContextRegister;
