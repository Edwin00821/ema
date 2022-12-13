import { FC, useEffect, useState } from 'react';
import { PersonaService } from 'services';

import { AiOutlineCheck, AiFillSave } from 'react-icons/ai';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { green } from '@mui/material/colors';
interface Props {
  id: number;
  nombre: string;
  appat: string;
  apmat: string;
  birthday: Date;
  valida: number;
  rowId: any;
  setRowId: any;
}
// const PersonaActions = ({ role, active, id, rowId, setRowId }) => {
const PersonaActions: FC<Props> = ({
  id,
  nombre,
  appat,
  apmat,
  birthday,
  valida,
  rowId,
  setRowId,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    const result = await PersonaService.delete({
      id_per: id,
      nombre_per: nombre,
      appat_per: appat,
      apmat_per: apmat,
      fecha_de_nacimiento_per: birthday,
      valida_per: valida ? 1 : 0,
    });

    if (result) {
      setSuccess(true);
      setRowId(null);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (rowId === id && success) setSuccess(false);
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
          disabled={id !== rowId || loading}
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

export default PersonaActions;
