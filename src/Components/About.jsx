import AboutImg from '../assets/img/about.jpg'

const About = () => {
  return (
    <div className="min-h-screen lg:px-32 px-5 flex flex-col lg:flex-row justify-between items-center pt-24 lg:pt-16 !scroll-smooth">
      <div className="space-y-4 w-full lg:w-3/4">
        <h1 className="text-4xl font-semibold text-[#111] text-center lg:text-start">About Us</h1>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          labore rerum tempore tenetur commodi natus quos itaque voluptatum
          repudiandae nostrum accusantium vero voluptate aspernatur totam,
          laboriosam aut, et quae consequatur?
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
          suscipit illum, numquam incidunt nostrum dolor officia doloremque
          cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
          Dolor, minus reiciendis.
        </p>
        <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
        </p>
      </div>
      <div className="w-full lg:w-3/4 mt-5">
        <img
          src={AboutImg}
          alt="AboutImage"
          className="rounded-xl w-full mx-auto lg:w-3/4"
        />
      </div>
    </div>
  );
};

export default About;
