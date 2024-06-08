import { Button } from "../atoms/Button";

export const Todo = ({ todo }: { todo: string }) => {
  return (
    <li>
      {todo}
      <Button text="edit" />
      <Button text="delete" />
    </li>
  );
};
