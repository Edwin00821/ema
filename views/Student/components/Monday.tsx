import { Day } from './';

interface Props {
  children: React.ReactNode;
  row: number;
}

const Monday = ({ children, row }: Props) => {
  return (
    <Day col={2} row={row}>
      {children}
    </Day>
  );
};

export default Monday;
