import Hero from "./Componets/Hero/Hero";
import Navbar from "./Componets/Navbar/Navbar";
import HeroImg from "./Assets/hero.jpg";
import Explore from "./Componets/Explore/Explore";
import Journal from "./Componets/Journal/Journal";
import Footer from "./Componets/Footer/Footer";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
};

const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white font-Montserrat">
      <div style={bgImage}>
        <Navbar />
        <Hero  />
      </div>
      <Explore/>
      <Journal/>
      <Footer/>
    </div>
  );
};

export default App;
