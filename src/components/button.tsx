type Props = {
  title: string;
  className?: string;
  onClick(): void;
};

const Button = ({ title, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
