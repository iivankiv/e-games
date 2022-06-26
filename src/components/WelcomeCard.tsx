type Props = {
  title?: string;
  text?: string;
};

const WelcomeCard = ({ title = 'Welcome!t', text = 'React and Tailwind CSS in action' }: Props) => {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">{title}</p>
      <p className="text-gray-500 text-lg">{text}</p>
    </div>
  );
};

export default WelcomeCard;
