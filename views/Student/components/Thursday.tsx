import { Day } from './';

interface Props {
  children: React.ReactNode;
  row: number;
}

const Thursday = ({ children, row }: Props) => {
  return (
    <Day col={5} row={row}>
      {children}
    </Day>
  );
};

export default Thursday;
