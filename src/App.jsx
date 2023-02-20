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
      const setTheme =(color)=>{
        document.documentElement.style.setProperty('--color-bg',color)
      }
      const setColor=(event)=>{
        console.log("setcolor")
        const currentcolor = event.target.style.getPropertyValue('color');
        setTheme(currentcolor)
        console.log(currentcolor)
        localStorage.setItem('color',currentcolor);
      }

  return (
    <>
      <Header/>
      <div className='color-list'>
      <Nav setColor={setColor}/>
      </div>
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
