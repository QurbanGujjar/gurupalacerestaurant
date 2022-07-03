
import './App.css';
import Catering from './components/catering/Catering';
import Login from './components/loginSignup/Login';
import Signup from './components/loginSignup/Signup';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import OurStory from './components/ourStory/OurStory';
import Slider from './components/slider/Slider';
import Model from './modelComponent/model/Model';
import SeeMenuOrder from './seeMenuOrder/SeeMenuOrder';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
 <>

<NoteState >
 <Router>
    <Routes>
    <Route exact path='/login' element={<div><Login/></div>} />
    <Route exact path='/signup' element={<div><Signup/></div>} />
    <Route exact path='/' element={<div><Navbar/>
 <Slider/>
 <SeeMenuOrder/>
 <OurStory/>
 <Catering/>
 <Model/>
 <Footer/></div>} />
    </Routes>
  </Router>
  </NoteState>
 </>
  );
}

export default App;
