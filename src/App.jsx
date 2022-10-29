// * All styles in all components which will be render in App.js
import Navbar from "./components/Navbar";
import "./scss/main.scss"

const App = () => {

  return (
    <div className="app">
      <Navbar />
      {/* <Loading /> */}
    </div>
  );
}

export default App;
