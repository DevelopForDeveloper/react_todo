import { useState } from "react";
import { Todo } from "../type/Todo";
import Form from "./Form";

export const TodoForm = ({ addList }: { addList: (aTodo: Todo) => void }) => {
  const [aTodo, setATodo] = useState<Todo>({ id: undefined, todo: "" });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setATodo({ id: Date.now(), todo: value });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (aTodo.todo === "") {
      console.error("값을 입력해주세요!");
      return;
    }
    setATodo({ id: undefined, todo: "" });
    addList(aTodo);
  };

  return (
    <Form
      formHandler={submitHandler}
      changeHandler={changeHandler}
      todo={aTodo.todo}
    />
  );
};
