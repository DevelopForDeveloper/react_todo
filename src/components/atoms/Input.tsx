import React from "react";

export const Input = () => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  };

  return <input type="text" onChange={changeHandler} />;
};
