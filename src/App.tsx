import Lottie from "lottie-react";
import "./App.css";
import meditatingfox from "./assets/meditating-fox.json";

const App = () => {
  return (
      <Lottie style={{ height: "40vw" }} animationData={meditatingfox} />
  );
};

export default App;
