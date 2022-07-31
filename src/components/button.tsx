import { ReactElement } from "react";

type Props = {
  title: string;
  className?: string;
  headIcon?: ReactElement;
  tailIcon?: ReactElement;
  onClick(): void;
};

const Button = ({ title, headIcon, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
    >
      {headIcon}
      {title}
    </button>
  );
};

export default Button;
