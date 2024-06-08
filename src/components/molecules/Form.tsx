import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Todo } from "../type/Todo";

export const Form = ({ addList }: { addList: (aTodo: Todo) => void }) => {
  const [aTodo, setATodo] = useState<Todo>({ id: undefined, todo: "" });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setATodo({ id: Date.now(), todo: value });
  };

  // 밑에함수 외우기
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (aTodo.todo === "") {
      console.error("값을 입력해주세요!");
      return;
    }
    // 미리 인풋부분을 비도록 해야하는지 찾아볼것
    setATodo({ id: undefined, todo: "" });
    addList(aTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input onChange={changeHandler} value={aTodo.todo} />
      <Button text="submit" />
    </form>
  );
};
