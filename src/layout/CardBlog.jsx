// eslint-disable-next-line react/prop-types
const CardBlog = ({ img , headLines }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 text-center space-y-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out ">
      <img src={img} className="h-64 md:h-96 lg:h-40 w-full rounded-lg" alt="image"/>
      <h1 className="text-lg font-semibold">{headLines}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        repellendus suscipit. Rerum consequatur magni expedita.
      </p>
    </div>
  );
};

export default CardBlog;
