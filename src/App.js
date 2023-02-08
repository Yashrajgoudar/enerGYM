import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="contentpage">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plans" element={<Plans />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>
      </div>
    </BrowserRouter> 
      {/* <Register /> */}
    </div>
  );
}

export default App;
