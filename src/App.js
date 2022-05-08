
import './App.css';
import Catering from './components/catering/Catering';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import OurStory from './components/ourStory/OurStory';
import Slider from './components/slider/Slider';
import Model from './modelComponent/model/Model';
import SeeMenuOrder from './seeMenuOrder/SeeMenuOrder';

function App() {
  return (
 <>
 <Navbar/>
 <Slider/>
 <SeeMenuOrder/>
 <OurStory/>
 <Catering/>
 <Model/>
 <Footer/>
 </>
  );
}

export default App;
