import React from 'react'
import Footer from '../../Components/Footer'
import DigitalAudio from './DigitalAudio'
import Electronics from './Electronics'
import Explores from './Explores'
import First from './First'
import Ipad from './Ipad'
import Iphones from './Iphones'
import Kodaks from './Kodaks'
import Leds from './Leds'
import Monitors from './Monitors'
import Storages from './Storages'
import Watchs from './Watchs'
// import Footer from '../Components/Footer'
// import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div style={{width:"98%",margin:"auto"}}>
    {/* <Navbar/> */}

          <First /> 

     <DigitalAudio /> 
      <hr/>

         <Leds />
        <hr />
        <Electronics />
        <hr />
      
     
      <Ipad />
      <hr/>
      <Iphones />
      <hr/>
      <Monitors />
      <hr/>
      <Watchs />
      <hr/>
      <Kodaks />
      <hr />
      <Storages /> 
      <hr />
      <Explores />
      <hr />
      <Footer />
    </div>
  )
}

export default Home