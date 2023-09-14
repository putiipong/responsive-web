import "./App.css";
import Athlets from "./components/Athlets";

import MobileSize from "./components/MobileSize";
import Players from "./components/Players";

function App() {
  return (
    <div className="App">
      <div className="desktop-tablet">
      <Athlets />
      <Players />
      </div>
      <MobileSize />
    </div>
  );
}

export default App;
