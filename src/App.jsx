// * All styles in all components which will be render in App.js
import { Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Landing from "./components/Home/Landing";
import Navbar from "./components/Navbar";

import "./scss/main.scss"

const App = () => {

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="about" element={<About />} />
      </Routes>
      {/* <Loading /> */}
    </div>
  );
}

export default App;
