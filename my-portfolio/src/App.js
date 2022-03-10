import './App.css';
import Header from "./components/header/Header"
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
// import Header from './components/header/Header'; src\components\header

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <About></About>
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        

    </div>
  );
}

export default App;
