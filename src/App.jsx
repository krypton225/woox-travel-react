// * All styles in all components which will be render in App.js
import Landing from "./components/Home/Landing";
import Navbar from "./components/Navbar";
import "./scss/main.scss"

const App = () => {

  return (
    <div className="app">
      <Navbar />
      <Landing />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
