import 'react-toastify/dist/ReactToastify.css';
export type { ToastItem } from 'react-toastify';
export { ToastContainer, toast } from 'react-toastify';

export const toastConfig = {
  theme: 'light' as 'light' | 'dark',
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: undefined,
};

export const toastContainerConfig = {
  theme: 'light' as 'light' | 'dark',
  position: 'top-right' as
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left',
  hideProgressBar: false,
  autoClose: 1000,
  newestOnTop: true,
  closeOnClick: true,
  draggable: true,
  rtl: false,
  pauseOnFocusLoss: false,
  pauseOnHover: true,
  limit: 0,
};
