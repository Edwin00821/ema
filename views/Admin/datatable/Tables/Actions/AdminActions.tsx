import { FC, useEffect, useState } from 'react';
import { AdminService } from 'services';
import { IMAdminReq } from 'interfaces/Entities';
import { AiOutlineCheck, AiFillSave } from 'react-icons/ai';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

import { green } from '@mui/material/colors';

interface Props {
  num_empleado: string;
  correo_user: string;
  valida_adm: number | string;
  rowId: any;
  setRowId: any;
}
// const PersonaActions = ({ role, active, id, rowId, setRowId }) => {
const AdminActions: FC<Props> = ({
  num_empleado,
  correo_user,
  valida_adm,
  rowId,
  setRowId,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<any> => {
    setLoading(true);
    const result= await AdminService.delete({
      num_empleado: num_empleado,
      correo_user: correo_user,
      valida_adm: valida_adm ? 1 : 0,
    });

    if (result) {
      setSuccess(true);
      setRowId(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (rowId === num_empleado && success) setSuccess(false);
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
          disabled={num_empleado !== rowId || loading}
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

export default AdminActions;
