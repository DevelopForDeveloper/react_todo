export const Input = ({
  onChange,
  value
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}) => {
  console.log();
  return <input type="text" onChange={onChange} value={value} />;
};
