import React from 'react'
// import DigitalAudio from './DigitalAudio/DigitalAudio'
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
// import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}

          <First /> 

     {/* <DigitalAudio />  */}
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
    </>
  )
}

export default Home