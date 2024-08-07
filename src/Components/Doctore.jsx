import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

// images doctores :
import doc1 from '../assets/img/doc1.jpg';
import doc2 from '../assets/img/doc2.jpg';
import doc3 from '../assets/img/doc3.jpg';
import doc4 from '../assets/img/doc4.jpg';
import doc5 from '../assets/img/doc5.jpg';
import doc6 from '../assets/img/doc6.jpg';
import CardDoctore from "../layout/CardDoctore";
const Doctore = () => {

  // const Data = [
  //   {
  //     img: "/src/assets/img/doc1.jpg",
  //     name: "Dr. Jonatan Mitchell",
  //     specialties: "Orthopedic Surgeon",
  //   },
  //   {
  //     img: "/src/assets/img/doc2.jpg",
  //     name: "Dr. Olivia Martinez",
  //     specialties: "Ophtalmologist",
  //   },
  //   {
  //     img: "/src/assets/img/doc6.jpg",
  //     name: "Dr. Julian Bennett",
  //     specialties: "Cardiologist",
  //   },
  //   {
  //     img: "/src/assets/img/doc3.jpg",
  //     name: "Dr. Tomas Rodriguez",
  //     specialties: "Pediatricien",
  //   },
  //   {
  //     img: "/src/assets/img/doc4.jpg",
  //     name: "Dr. Victoria Nguyen",
  //     specialties: "Neurologist",
  //   },
  //   {
  //     img: "/src/assets/img/doc5.jpg",
  //     name: "Dr. Ethan Carter",
  //     specialties: "Dermatologist",
  //   },
  // ];


  const Slide = useRef(null);

  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
          infinite:true,
          dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          initialSlide:2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          initialSlide:2,
        },
      },
    ],
  };
  
  return (
    <div className="min-h-screen flex flex-col lg:px-32 px-5 lg:pt-32 pt-20 !scroll-smooth">
      <div className="flex flex-col lg:flex-row  justify-between mb-10 lg:mb-0">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div className="flex flrex-row gap-5">
          <button className="bg-[#d5f2ec] text-backgroundColor rounded-md px-4 py-2 active:bg-[#ade9dc]" onClick={()=>Slide.current.slickPrev()}>
            <FaArrowLeft size={25} />
          </button>
          <button className="bg-[#d5f2ec] text-backgroundColor rounded-md px-4 py-2 active:bg-[#ade9dc]" onClick={()=>Slide.current.slickNext()}>
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={Slide} {...settings}>
          {/* ------------ Methode 1 ) :--------------------- */}
          {/* {Data.map((e, index) => (
            <div
              key={index}
              className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
            >
              <div>
                <img
                  src={e.img}
                  alt="Img"
                  className="h-56 rounded-t-xl w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-semibold text-xl mt-4">{e.name}</h1>
                <h3 className="pt-2">{e.specialties}</h3>
              </div>
            </div>
          ))} */}
          {/* Methode 2) : -------------------  */}
          <CardDoctore img={doc1} specialties={'Orthopedic Surgeon'} name={'Dr. Jonatan Mitchell'}/>
          <CardDoctore img={doc2} specialties={'Ophtalmologist'} name={'Dr. Olivia Martinez'}/>
          <CardDoctore img={doc3} specialties={'Cardiologist'} name={'Dr. Julian Bennett'}/>
          <CardDoctore img={doc4} specialties={'Pediatricien'} name={'Dr. Tomas Rodriguez'}/>
          <CardDoctore img={doc5} specialties={'Neurologist'} name={'Dr. Victoria Nguyen'}/>
          <CardDoctore img={doc6} specialties={'Dermatologist'} name={'Dr. Ethan Carter'}/>
        </Slider>
      </div>
    </div>
  );
};

export default Doctore;
