import { FunctionComponent, ReactNode } from "react";

interface ModalProps {
  open?: boolean;
  fullscreen?: boolean;
  children: ReactNode | ReactNode[];
}

const Modal: FunctionComponent<ModalProps> = ({
  fullscreen = false,
  open = true,
  children,
}) => {
  const classes = fullscreen
    ? "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-slate-100 backdrop-blur-sm bg-opacity-80 z-10"
    : "flex justify-center w-full z-10";

  if (open) return <div className={classes}>{children}</div>;

  return null;
};

export default Modal;
