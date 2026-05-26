import './App.css'
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import Hero from "./components/Hero/hero.jsx";
function App() {

  return (
    <>
      <div className="wrapper-app">
        <Header />
          <Hero/>
        <Footer/>
      </div>
    </>
  )
}

export default App
