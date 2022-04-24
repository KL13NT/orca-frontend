import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-xl border-2 border-alt border-solid px-8 py-2 text-center text-base font-extrabold bg-action ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
