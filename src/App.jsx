import Navbar from "./components/Navbar";
import Home from "./components/Home";
import UseState from "./components/UseState.jsx";
import UseStateEx2 from "./components/UseStateEx2";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/app.scss";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useState-ex2" element={<UseStateEx2 />} />
      </Routes>
    </Router>
  );
}

export default App;
