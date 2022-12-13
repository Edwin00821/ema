import { Box, CircularProgress, Fab } from '@mui/material';
import { useEffect, useState, FC } from 'react';
import { AiOutlineCheck, AiFillSave } from 'react-icons/ai';
import { green } from '@mui/material/colors';
import { GeneroService } from 'services';
import { toast, toastConfig } from 'libs';
interface Props {
  id: number;
  tipo: string;
  valida: number;
  rowId: any;
  setRowId: any;
}

const customId = 'custom-id-GeneroActions';

const GeneroActions: FC<Props> = ({ id, tipo, valida, rowId, setRowId }) => {
  // const { dispatch } = useValue();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (): Promise<void> => {
    setLoading(true);
    toast.loading('Validando datos...', {
      toastId: customId,
      position: 'top-right',
      autoClose: 2000,
      ...toastConfig,
    });

    const { data, message } = await GeneroService.delete({
      id_gen: id,
      tipo_gen: tipo,
      valida_gen: valida ? 1 : 0,
    });

    if (data) {
      toast.update(customId, {
        render: 'Genero actualizado con exito 😁',
        type: 'success',
        isLoading: false,
        position: 'top-right',
        autoClose: 2000,
        ...toastConfig,
      });
      setSuccess(true);
      setRowId(null);
    }
    if (message) {
      toast.update(customId, {
        toastId: customId,
        render: 'Ocurrio un error al actualizar el genero 😓',
        isLoading: false,
        type: 'error',
        autoClose: 2000,
        ...toastConfig,
      });
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

export default GeneroActions;
