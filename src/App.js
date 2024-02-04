
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About'
import {
  BrowserRouter as Router,

  Route,
  Routes,

  Link
} from "react-router-dom";
import Shop from './Component/Shop';
function App() {
  return (
    <div className="App">

     
      <Router> <Navbar />
        <Routes>

          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/shop" element={<Shop></Shop>} />
        </Routes>


      </Router>
    </div>
  );
}

export default App;
