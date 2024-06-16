export const Input = ({
  onChange,
  value
}: {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}) => {
  return <input type="text" onChange={onChange} value={value} />;
};
