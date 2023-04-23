import "./App.css";
import Homepage from "./pages/Homepage";
import ReviewsProfile from "./pages/ReviewsProfile";
import Footer from "./utilities/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./componets/Contact";
import Navbar from "./utilities/NavBar";

function App() {
  return (
    <div className="">
      <Router>
        <Contact />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/service" element={<ReviewsProfile />} />
          <Route path="/*" element={<h1> No Page Found</h1>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
