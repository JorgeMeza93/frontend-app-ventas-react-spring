import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Clientes from "./components/pages/Clientes";
import { ModalContextProvider } from "./components/context/ModalContext"

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/clientes" element={<Clientes/>} />
          </Routes>
        </Router>
      </ModalContextProvider>
      
    </div>
  );
}

export default App;
