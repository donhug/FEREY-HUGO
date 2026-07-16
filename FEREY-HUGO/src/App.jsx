import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useContext} from "react";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Projet from "./pages/Projet/Projet.jsx";
import Erreur from "./pages/Erreur/Erreur.jsx";
import ThemeProvider, {ThemeContext} from "./context/ThemeContext.jsx"

function AppContent(){
    const {theme} = useContext(ThemeContext);

    return(
        <div>
            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<Accueil/>} />
                    <Route path="/Projet/:id" element={<Projet/>}/>
                    <Route path="*" element={<Erreur />}/>
                </Routes>
            </main>

            <Footer/>
        </div>
    )
}


function App() {

  return (
    <>
        <Router>
            <ThemeProvider>
                <AppContent/>
            </ThemeProvider>
          </Router>
    </>
  )
}

export default App
