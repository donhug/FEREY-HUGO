import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Accueil from "./pages/Accueil/Accueil.jsx";
function App() {

  return (
    <>
      <div className="wrapper-app">
          <Router>
            <Header/>
              <Routes>
                  <Route path="/" element={<Accueil/>} />
                  <Route path="/Projet/:id" element={<div>projet</div>}/>
                  <Route path="*" element={<div>404</div>}/>
              </Routes>
            <Footer/>
          </Router>
      </div>
    </>
  )
}

export default App
