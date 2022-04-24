import { FunctionComponent, ReactNode } from "react";

interface ActionProps {
  children: ReactNode | ReactNode[];
}

const Action: FunctionComponent<ActionProps> = ({ children }) => {
  return <button className="">{children}</button>;
};

export default Action;
