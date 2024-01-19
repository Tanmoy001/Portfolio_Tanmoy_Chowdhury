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
import CustomCursor from './components/cursor/CustomCursor';

const App = ()=>{
      const [loader,setLoader]=useState(false)
      useEffect(()=>{
        setLoader(false);
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
   <>
  
  <div className='mainsection'/* style={{backgroundColor:color}} */>
    {/* <My3DScene/> */}
   {/*  {console.log(setColor)} */}
   <CustomCursor/>
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
      </>
    )}
    </div>
    
  )

}
// function Model(props) {
//   const gltf = useGLTF('/final.glb')
//   return <primitive {...props} object={gltf.scene} />
// }
// function LittlestTokyo({ ...props }) {
//   // This hook gives you offets, ranges and other useful things
//   const scroll = useScroll()
//   const { scene, nodes, animations } = useGLTF('/LittlestTokyo-transformed.glb')
//   const { actions } = useAnimations(animations, scene)
//   useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
//   useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
//   useFrame((state, delta) => {
//     const action = actions['Take 001']
//     // The offset is between 0 and 1, you can apply it to your models any way you like
//     const offset = 1 - scroll.offset
//     action.time = THREE.MathUtils.damp(action.time, (action.getClip().duration / 2) * offset, 100, delta)
//     state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
//     state.camera.lookAt(0, 0, 0)
//   })
//   return <primitive object={scene} {...props} />
// }

// /*
// author: glenatron (https://sketchfab.com/glenatron)
// license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
// source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
// title: Littlest Tokyo */
// useGLTF.preload('/LittlestTokyo-transformed.glb')

export default App;
