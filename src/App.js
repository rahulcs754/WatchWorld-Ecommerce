import "react-toastify/dist/ReactToastify.css";
import Routespaths from "./routes";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Header />
      <Routespaths />
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </>
  );
};

export default App;
