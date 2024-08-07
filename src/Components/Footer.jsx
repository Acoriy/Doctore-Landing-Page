import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full bg-backgroundColor text-white rounded-t-3xl !scroll-smooth">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 ">
          <h1 className="text-xl font-semibold pb-4">WellnessVista</h1>
          <p className="mt-2">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>

        <div>
            <h1 className="text-xl font-semibold pt-5 pb-4 md:pt-0">About Us</h1>
            <nav className="flex flex-col gap-2">
                <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">About</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Services</Link>
                <Link to="doctore" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Doctore</Link>
            </nav>
        </div>

        <div className="flex flex-col">
            <h1 className="text-xl font-semibold pt-5 pb-4 md:pt-0">Services</h1>
            <nav className="flex flex-col gap-2">
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Lab Test</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Health Check</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-hoverColor transition-all duration-300 cursor-pointer ease-in-out">Heart Health</Link>
            </nav>
            
        </div>

        <div className="w-full md:w-1/4">
            <h1 className="text-xl font-semibold pt-5 pb-4 md:pt-0">Contact Us</h1>
            <nav className="flex flex-col gap-2">
                <Link to="/" spy={true} smooth={true} duration={500} >123 Elm Street, Suite 456 Springfield, IL 62701 United States</Link>
                <Link to="/" spy={true} smooth={true} duration={500} >support@care.com</Link>
                <Link to="/" spy={true} smooth={true} duration={500} >+123-456-7890</Link>
            </nav>
        </div>

      </div>
      <div>
        <p className="text-center py-4 text-lg">
        @copyright developed by  
        <a href="https://sofyaneacoriy.netlify.app/" target="_blank" className="text-hoverColor text-xl font-semibold hover:underline"> Sofyane Acoriy </a> 
        | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
