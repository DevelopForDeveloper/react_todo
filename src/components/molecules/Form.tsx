import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import type { Todo } from "../type/Todo";

const Form = ({
  formHandler,
  changeHandler,
  todo
}: {
  formHandler: React.FormEventHandler<HTMLFormElement>;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
  todo: Todo["todo"];
}) => {
  return (
    <form onSubmit={formHandler}>
      <Input onChange={changeHandler} value={todo} />
      <Button text="save" />
    </form>
  );
};

export default Form;
