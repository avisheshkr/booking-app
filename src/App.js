import Home from "./pages/Home/Home";
import Lists from "./pages/Lists/Lists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Hotel from "./pages/Hotel/Hotel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="top-container">
          <div className="sub-container">
            <Header />
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/hotel" element={<Hotel />} />
        </Routes>
        <div className="top-container">
          <Newsletter />
        </div>
        <div className="bottom-container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
