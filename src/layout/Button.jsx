
// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return (
    <div>
      <button className="bg-brightColor border-none outline-none hover:bg-hoverColor transition-all duration-500 ease-in-out px-4 py-2 rounded-md text-white">
        {title}
      </button>
    </div>
  );
};

export default Button;
