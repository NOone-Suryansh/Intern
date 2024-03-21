
import {Route,Routes, BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Home from "./components/core/Home";
import Footer from "./components/common/Footer";
import JobState from "./context/JobState";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div>
      <JobState>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Footer/>
      </Router>
      </JobState>
    </div>
  );
}

export default App;
