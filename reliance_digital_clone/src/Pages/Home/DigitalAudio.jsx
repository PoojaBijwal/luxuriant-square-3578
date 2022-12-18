import React from 'react'
import { data } from '../../data'
import Product from './Product';
import "./Home.css"
// import styles from "./"

const DigitalAudio = () => {
    console.log("from digital audio",data);
  return (
    <div style={{width:"100%"}}>
        <h1 style={{fontSize:"30px", marginRight:"1050px"}}>DIGITAL AUDIO </h1>
        <div className='digital'>

        {
            data.map((items)=>{
                return(
                    <Product items={items} />
                    )
            })
        }
        </div>
    </div>
  )
}

export default DigitalAudio