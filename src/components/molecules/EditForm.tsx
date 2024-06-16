import { useState } from "react";
import { Todo } from "../type/Todo";
import Form from "./Form";

export const EditForm = ({
  todoEdit,
  isEditing
}: {
  todoEdit: (editTodo: Todo) => void;
  isEditing: number | undefined;
}) => {
  const [editTodo, setEditTodo] = useState<Todo>({ id: isEditing, todo: "" });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(e.target.value);
    setEditTodo({ id: isEditing, todo: value });
  };

  const saveHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editTodo.todo === "") {
      console.error("add input");
      return;
    }
    todoEdit(editTodo);
  };

  return (
    <Form
      formHandler={saveHandler}
      changeHandler={changeHandler}
      todo={editTodo.todo}
    />
  );
};
