import { AnchorHTMLAttributes, FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const Anchor: FunctionComponent<AnchorProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      className={`block text-center text-base font-extralight ${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Anchor;
