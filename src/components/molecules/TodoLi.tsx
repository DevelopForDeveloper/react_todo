import { Button } from "../atoms/Button";
import type { Todo } from "../type/Todo";
import "./../../App.css";

export const TodoLi = (item: Todo, index: number) => {
  return (
    <li>
      {index + 1}. {item.todo}
      <Button text="edit" />
      <Button text="delete" />
    </li>
  );
};
