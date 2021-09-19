import React from 'react';

type ButtonProps = {
  message: string;
  onClick: Function;
};

export const Button = (props: ButtonProps) => (
  <button onClick={(e) => props.onClick(e)}>{props.message}</button>
);

export default Button;
