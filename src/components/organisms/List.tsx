import { useState } from "react";
import { Form } from "../molecules/Form";
import { Todo } from "../type/Todo";
import { TodoLi } from "../molecules/TodoLi";

export const List = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (aTodo: Todo) => {
    setTodoList([...todoList, aTodo]);
  };

  const editHandler = (id: number | undefined) => {};

  const deleteHandler = (id: number | undefined) => {
    const updatedTodo = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodo);
  };

  console.log({ todoList });

  return (
    <div>
      <Form addList={addTodo} />
      {todoList.map((item, index) =>
        TodoLi({ item, index, editHandler, deleteHandler })
      )}
    </div>
  );
};
