
import About from "./Components/About";
import Blog from "./Components/Blog";
import Doctore from "./Components/Doctore";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navebare from "./Components/Navebare";
import Services from "./Components/Services";

// import ContactUs from "./model/ContactUs"


function App() {

  return (
    <>
       <Navebare/>
       <main>
         <div id="home">
            <Home/>
         </div>
         <div id="about">
            <About/>
         </div>
         <div id="services">
            <Services/>
         </div>
         <div id="doctore">
            <Doctore/>
         </div>
         <div id="blog">
            <Blog/>
         </div>
         <Footer/>
       </main>
    </>
  )
}

export default App
