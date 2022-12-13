interface Props {
  row: number;
  hour: string;
}
const Hours = ({ row, hour }: Props) => {
  const rowFormat = `row-start-[${row}] col-start-1`;
  return (
    <p
      className={`${rowFormat} h-20 border-t-2 border-gray-300 text-lg font-bold`}
    >
      {hour} HRS
    </p>
  );
};

export default Hours;
