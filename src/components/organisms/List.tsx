import { useState } from "react";
import { Form } from "../molecules/Form";
import { Todo } from "../type/Todo";
import { TodoLi } from "../molecules/TodoLi";

export const List = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<Todo>({ id: undefined, todo: "" });

  const addTodo = (aTodo: Todo) => {
    setTodoList([...todoList, aTodo]);
  };

  const editHandler = (id: number | undefined) => {
    // 1. 클릭한 아이디는 정해져야한다.
    // 2. 클릭한 아이디를 위해 인풋필드를 열어야 한다.
    // 3. 수정한 이후에 세이브 버튼을 통해 리스트가 업데이트 되어야 한다.
    // 4. 업데이트된 리스트는 List 컴포넌트에 전달되어야 한다.
    const editTodo = todoList.find((item) => item.id === id);
    if (editTodo) {
      setEditTodo(editTodo);
    }
  };
  console.log({ editTodo });

  const deleteHandler = (id: number | undefined) => {
    const updatedTodo = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodo);
  };

  // console.log({ todoList });

  return (
    <div>
      <Form addList={addTodo} />
      {todoList.map((item, index) => {
        return item.id === editTodo.id ? (
          <Form />
        ) : (
          TodoLi({ item, index, editHandler, deleteHandler })
        );
      })}
    </div>
  );
};
