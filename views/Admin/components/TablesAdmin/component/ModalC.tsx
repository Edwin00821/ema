import { Modal, Box } from '@mui/material';
import { FC, ReactNode } from 'react';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalC: FC<Props> = ({ isVisible, onClose, children }) => {
  return (
    <Modal
      open={isVisible}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style} className='dark:bg-tertiary'>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalC;
