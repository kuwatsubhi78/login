import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./login.css";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
