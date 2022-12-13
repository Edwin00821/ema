import { Day } from './';

interface Props {
  children: React.ReactNode;
  row: number;
}

const Wednesday = ({ children, row }: Props) => {
  return (
    <Day col={4} row={row}>
      {children}
    </Day>
  );
};

export default Wednesday;
