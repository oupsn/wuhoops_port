import Lottie from "lottie-react";
import "./App.css";
import meditatingfox from "./assets/meditating-fox.json";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Lottie style={{ height: "40vw" }} animationData={meditatingfox} />
    </BrowserRouter>
  );
};

export default App;
