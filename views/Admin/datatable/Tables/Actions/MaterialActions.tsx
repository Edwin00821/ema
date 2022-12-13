import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState, FC } from 'react';
// import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { MaterialService } from 'services';
import { AiFillSave, AiOutlineCheck } from 'react-icons/ai';

interface Props {
  id: number;
  url: string;
  id_sub: number;
  valida: number;
  rowId: any;
  setRowId: any;
}

const MaterialActions: FC<Props> = ({
  id,
  url,
  id_sub,
  valida,
  rowId,
  setRowId,
}) => {
  // const { dispatch } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    const result = await MaterialService.delete({
      id_mat: id,
      url_mat: url,
      id_sub: id_sub,
      valida_mat: valida ? 1 : 0,
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

export default MaterialActions;
