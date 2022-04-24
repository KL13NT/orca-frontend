import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FunctionComponent<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`rounded-xl border-2 border-border border-solid px-8 py-2 text-center text-base font-extralight ${className}`}
      {...props}
    />
  );
};

export default Input;
