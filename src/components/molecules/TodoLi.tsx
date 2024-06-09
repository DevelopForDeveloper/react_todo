import { Button } from "../atoms/Button";
import type { Todo } from "../type/Todo";
import "./../../App.css";

type TodoLiProps = {
  index: number;
  item: Todo;
  editHandler: (id: number | undefined) => void;
  deleteHandler: (id: number | undefined) => void;
};

export const TodoLi = ({
  index,
  item,
  editHandler,
  deleteHandler
}: TodoLiProps) => {
  return (
    <li>
      {index + 1}. {item.todo}
      <Button text="edit" onClick={() => editHandler(item.id)} />
      <Button text="delete" onClick={() => deleteHandler(item.id)} />
    </li>
  );
};
