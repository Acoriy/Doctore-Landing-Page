// eslint-disable-next-line react/prop-types
const CardServeces = ({ icon, title }) => {
  return (
    <div className="group  flex flex-col items-center w-full lg:w-1/3 text-center p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out ">
      <div className="bg-[#d5f2ec] rounded-full p-3 transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
        {icon}
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </div>
      <div className="text-backgroundColor text-lg cursor-pointer hover:text-[#ade9dc] transition duaration-300 ease-in-out">
        Learn more
      </div>
    </div>
  );
};

export default CardServeces;
