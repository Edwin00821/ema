import { FC, useEffect, useState } from 'react';
import { UsuarioService } from 'services';

import { AiOutlineCheck, AiFillSave } from 'react-icons/ai';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { green } from '@mui/material/colors';

interface Props {
  correo_user: string;
  id_per: number;
  password_user: string;
  id_rol: number;
  tipo_rol: string;
  valida_user: string | number;
  rowId: any;
  setRowId: any;
}

const UserActions: FC<Props> = ({
  correo_user,
  id_rol,
  id_per,
  tipo_rol,
  valida_user,
  rowId,
  setRowId,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<any> => {

    setLoading(true);
    const result = await UsuarioService.delete({
      correo_user,
      valida_user: valida_user ? 1 : 0, 
      id_rol,
      id_per,
    });

    // correo_user,
    //   id_rol: tipo_rol === 'Administrador' ? 1 : 2,
    //   id_per: 2,
    //   valida_user: valida_user ? 1 : 0,
    if (result) {
      setSuccess(true);
      setRowId(null);
      setLoading(false);
    }
    
    return {}
  };

  useEffect(() => {
    if (rowId === correo_user && success) setSuccess(false);
  }, [rowId]);

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
    >
      {success ? (
        <Fab
          color='primary'
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] },
          }}
          className='h-10 w-10 bg-sky-500 hover:bg-sky-700'
        >
          <AiOutlineCheck className='h-1/2 w-full ' />
        </Fab>
      ) : (
        <Fab
          color='primary'
          sx={{
            width: 40,
            height: 40,
          }}
          disabled={correo_user !== rowId || loading}
          onClick={handleSubmit}
        >
          <AiFillSave className='h-1/2 w-full hover:text-black' />
        </Fab>
      )}
      {loading && (
        <CircularProgress
          size={52}
          sx={{
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
          }}
        />
      )}
    </Box>
  );
};

export default UserActions;
