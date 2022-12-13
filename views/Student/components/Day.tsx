interface Props {
  children: React.ReactNode;
  col?: number;
  colEnd?: number;
  row: number;
  rowEnd?: number;
  active?: boolean;
}

const Day = ({ children, col, colEnd, row, rowEnd, active }: Props) => {
  const position = `row-start-[${row}] col-start-${col} row-end-${row + 1}`;
  return (
    <div className={`${position} h-full border-t-2 border-gray-300`}>
      {active && (
        <div
          className={`flex h-full flex-col items-center rounded-full bg-sky-500 p-5`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Day;
