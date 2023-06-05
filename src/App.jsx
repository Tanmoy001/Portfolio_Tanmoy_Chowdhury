import './App.css';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import React,{useState,useEffect} from 'react';
import BeatLoader from 'react-spinners/BeatLoader'

const App = ()=>{
      const [loader,setLoader]=useState(false)
      useEffect(()=>{
        setLoader(true);
        setTimeout(() => {
          setLoader(false)
        }, 1500);

      },[])
  
 /*  const setTheme =(color)=>{
        document.documentElement.style.setProperty('--color-bg',color)
      }
      const setColor=(event)=>{
        console.log("setcolor")
        const currentcolor = event.target.style.getPropertyValue('color');
        setTheme(currentcolor)
        console.log(currentcolor)
        localStorage.setItem('color',currentcolor);
      }
 */

     /*  const [color, setColor] = useState("white") */
/* 
      const togglemode=(cls)=>{

          document.body.style.backgroundColor="white";
          showAlert("Light mood enbaled","sucess");
        }
      } */
  return (
    <div className='App'>
    {loader ? 
  (
    
  <BeatLoader className='rotateloader'
  style={{height:'100vh'}}
  color={'#3189'}
  loading={loader}
 
 
/>
  )
  :(
  
  <div className='mainsection'/* style={{backgroundColor:color}} */>
   {/*  {console.log(setColor)} */}
      <Header/>
      <div className='color-list'>
      <Nav /* setColor={setColor} *//>
      </div>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
    )}
    </div>
  )

}

export default App;
