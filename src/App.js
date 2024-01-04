import { Toaster } from "react-hot-toast";
import "./App.css";
import Routers from "./routers";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routers />
    </div>
  );
}

export default App;
