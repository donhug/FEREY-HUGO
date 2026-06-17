import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Projet from "./pages/Projet/Projet.jsx";
import Erreur from "./pages/Erreur/Erreur.jsx";
function App() {

  return (
    <>
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Accueil/>} />
                    <Route path="/Projet/:id" element={<Projet/>}/>
                    <Route path="*" element={<Erreur />}/>
                </Routes>
            </main>

            <Footer/>
          </Router>
    </>
  )
}

export default App
