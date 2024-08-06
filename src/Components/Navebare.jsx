import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ContactUs from "../model/ContactUs";

const Navebare = () => {
  const [isOpen , setIsOpen] = useState(false);
  const [showForm , setShowForm] = useState(false);

  const handleChange = ()=>{
    setIsOpen(!isOpen);
  }
  
  const closeMenu = ()=>{
    setIsOpen(false)
  }
  const OpenForm = ()=>{
    setShowForm(true);
    setIsOpen(false);
  }

  const CloseForm = ()=>{
    setShowForm(false);
  }

  return (
    <div className="fixed w-full text-[#fff] z-10">
      <div className="flex bg-backgroundColor px-5 lg:px-32 py-6 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  justify-between ">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Link to="home" className="text-2xl font-semibold">WellnessVista.</Link>
        </div>
        

        <nav className="hidden lg:flex flex-row items-center font-medium text-lg gap-8">
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">About</Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Services</Link>
          <Link to="doctore" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Doctore</Link>
          <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Blog</Link>
        </nav>

        <div className="hidden lg:flex">
           <button 
           className="bg-brightColor border-none outline-none hover:bg-hoverColor transition-all duration-500 ease-in-out px-4 py-2 rounded-md"
           onClick={OpenForm}>Contact Us</button>
        </div>
        {/* close form */}
        {showForm && <ContactUs closeForm={CloseForm}/>}
        {/* icons menu */}
          <div className="lg:hidden flex text-32 items-center">
             {isOpen? (<AiOutlineClose size={28} onClick={handleChange}/>)
             :(<AiOutlineMenu size={28} onClick={handleChange}/>)}
          </div>
        {/* mobile menu  */}
        <div className={`${isOpen? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col bg-backgroundColor text-2xl font-semibold gap-8 absolute top-16 left-0 w-full h-fit pt-8 pb-4  text-center transition-transform duration-500 ease-in-out`}>
          <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out" onClick={closeMenu}>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out" onClick={closeMenu}>About</Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out" onClick={closeMenu}>Services</Link>
          <Link to="doctore" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out" onClick={closeMenu}>Doctore</Link>
          <Link to="blog" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out" onClick={closeMenu}>Blog</Link>
          <div className="lg:hidden text-2xl">
           <button className="bg-brightColor border-none outline-none hover:bg-hoverColor transition-all duration-500 ease-in-out px-4 py-2 rounded-md"
           onClick={OpenForm}>Contact Us</button>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Navebare;
