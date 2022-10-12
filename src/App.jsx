import './App.css';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';

const App = ()=>{
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App;
