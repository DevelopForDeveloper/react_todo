import { useState } from "react";
import { TodoForm } from "../molecules/TodoForm";
import { Todo } from "../type/Todo";
import { TodoLi } from "../molecules/TodoLi";
import { EditForm } from "../molecules/EditForm";

export const List = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState<number | undefined>();

  const addTodo = (aTodo: Todo) => {
    setTodoList([...todoList, aTodo]);
  };

  const editHandler = (id: number | undefined) => {
    setIsEditing(id);
  };
  console.log({ isEditing });

  const deleteHandler = (id: number | undefined) => {
    const updatedTodo = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodo);
  };

  const newTodo = (editTodo: Todo) => {
    setIsEditing(undefined);
    const updateList = todoList.map((todo) =>
      todo.id === editTodo.id ? (todo = editTodo) : todo
    );
    setTodoList(updateList);
  };
  console.log({ todoList });

  return (
    <div>
      <TodoForm addList={addTodo} />
      {todoList.map((item, index) =>
        item.id === isEditing ? (
          <EditForm todoEdit={newTodo} isEditing={isEditing} />
        ) : (
          TodoLi({ item, index, editHandler, deleteHandler })
        )
      )}
    </div>
  );
};
