

// eslint-disable-next-line react/prop-types
const CardDoctore = ({name , img , specialties}) => {
  return (
    <div>
        <div
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
            >
              <div>
                <img
                  src={img}
                  alt="Img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-semibold text-xl mt-4">{name}</h1>
                <h3 className="pt-2">{specialties}</h3>
              </div>
            </div>  
    </div>
  )
}

export default CardDoctore
