import { RiMicroscopeLine } from "react-icons/ri";
import Button from "../layout/Button";
import CardServeces from "../layout/CardServeces";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";


const Services = () => {
  
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor"/>
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor"/>
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor"/>

  return (
    <div className="w-full min-h-screen justify-center  lg:px-32 px-5 flex flex-col pt-24 lg:pt-16 !scroll-smooth">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold text-[#111]">Our Services</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem.
          </p>
        </div>
        <div>
          <Button title={'See Services'}/>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
         <CardServeces title={'Lab Test'} icon={icon1}/>
         <CardServeces title={'Health Check'} icon={icon2}/>
         <CardServeces title={'Heart Health'} icon={icon3}/>
      </div>
    </div>
  );
};

export default Services;
