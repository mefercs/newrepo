import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/main.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <div className="main">
        <Footer />
        <AnimatedRoutes />
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
