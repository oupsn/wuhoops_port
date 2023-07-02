import Lottie from "lottie-react";
import meditatingfox from "../assets/meditating-fox.json";
const NotFound = () => {
  return (
    <>
      <Lottie style={{ height: "40vw" }} animationData={meditatingfox} />
      <h1>404 Not found</h1>
    </>
  );
};

export default NotFound;
