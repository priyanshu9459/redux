
import './App.css';
import Navbar from './Component/Navbar';
import About from './Component/About'
import {
  BrowserRouter as Router,

  Route,
  Routes,

  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Navbar />
      <Router>
        <Routes>

          <Route exact path="/about" element={<About></About>} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
