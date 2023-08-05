import About from "../components/fragments/About";
import Footer from "../components/fragments/Footer";
import Skills from "../components/fragments/Skills";
import Hero from "../components/fragments/hero";

const HomePage = () => {
  return (
    <div className=" bg-primary font-poppins">
      <Hero />
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
};

export default HomePage;
