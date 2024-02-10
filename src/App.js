import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import AllLinks from "./Routes/AllLinks";

function App() {
  return (
    <div className="App">
      <AllLinks />
      <AllRoutes />
    </div>
  );
}

export default App;
