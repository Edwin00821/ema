import { Day } from './';

interface Props {
  children: React.ReactNode;
  row: number;
}

const Tuesday = ({ children, row }: Props) => {
  return (
    <Day col={3} row={row}>
      {children}
    </Day>
  );
};

export default Tuesday;
