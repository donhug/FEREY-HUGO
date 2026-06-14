import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Projet from "./pages/Projet/Projet.jsx";
function App() {

  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/Projet/:id" element={<Projet/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
            <Footer/>
          </Router>
    </>
  )
}

export default App
