import  Button  from "../layout/Button";
import CardBlog from "../layout/CardBlog";

// image bloges
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blog2.jpg";
import blog3 from "../assets/img/blog3.jpg";
import blog4 from "../assets/img/blog4.jpg";
import blog5 from "../assets/img/blog5.jpg";
import blog6 from "../assets/img/blog6.jpg";

const Blog = () => {
  return (
    <div className="min-h-screen lg:px-32 p-5 w-full pt-24 !scroll-smooth">
      <div className="flex flex-col ">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold text-center lg:text-start">Latest Post</h1>
            <p className="mt-2 text-center lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
              quidem.
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <Button title="Our Articles"/>
          </div>
        </div>
        <div className="my-8">
          <div className="flex flex-wrap justify-center gap-5">
            <CardBlog headLines={'Unraveling the Mysteries of Sleep'} img={blog1} />
            <CardBlog headLines={'The Heart-Healthy Diet'} img={blog2} />
            <CardBlog headLines={'Understanding Pediatric Vaccinations'} img={blog3} />
            <CardBlog headLines={'Navigating Mental Health'} img={blog4} />
            <CardBlog headLines={'The Importance of Regular Exercise'} img={blog5} />
            <CardBlog headLines={'Skin Health 101'} img={blog6} />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Blog;
