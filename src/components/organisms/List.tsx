import React from "react";
import { Form } from "../molecules/Form";
import { Todo } from "../molecules/Todo";

export const List = () => {
  return (
    <div>
      <Form />
      <Todo todo="todo" />
    </div>
  );
};
