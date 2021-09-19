import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type HelloProps = {
  title: string;
  paragraph: string;
};

export const Hello: FunctionComponent<HelloProps> = ({ title, paragraph }) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

export default Hello;
