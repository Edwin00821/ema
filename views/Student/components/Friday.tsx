import { Day } from './';

interface Props {
  children: React.ReactNode;
  row: number;
}

const Friday = ({ children, row }: Props) => {
  return (
    <Day col={6} row={row}>
      {children}
    </Day>
  );
};

export default Friday;
