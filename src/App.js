import "react-toastify/dist/ReactToastify.css";
import Routespaths from "./routes";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "light" : "dark"}`}>
      <Header />
      <Routespaths />
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default App;
