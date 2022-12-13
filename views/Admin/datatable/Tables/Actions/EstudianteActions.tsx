import { FC, useEffect, useState } from 'react';
import { EstudianteService } from 'services';

import { AiOutlineCheck, AiFillSave } from 'react-icons/ai';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { green } from '@mui/material/colors';

interface Props {
  boleta: string;
  correo: string;
  id_es: number;
  id_sem: number;
  valida: number|string;
  rowId: any;
  setRowId: any;
}

const EstudianteActions: FC<Props> = ({
  boleta,
  correo,
  id_es,
  id_sem,
  valida,
  rowId,
  setRowId,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    const result = await EstudianteService.delete({
      boleta_est: boleta,
      correo_user: correo,
      id_es: id_es,
      id_sem: id_sem,
      valida_est: valida ? 1 : 0,
    });

    if (result) {
      setSuccess(true);
      setRowId(null);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (rowId === boleta && success) setSuccess(false);
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
          disabled={boleta !== rowId || loading}
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

export default EstudianteActions;
