

import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Storage from './Storage'
// import "./Watch.css"



const getData = (page) => {
  return axios.get(`https://anjuserver.onrender.com/storage`)
}

const Storages = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <>
    <h1 style={{marginRight:"50%"}}> KODAK TV  STARTING FROM 7499</h1>

      <Flex>
        {
          arr.map((ele,index) =>{

              if(index<3){
                  return(

                      <Grid>
              <Storage key={ele.id} 
              url={ele.url} 
              title={ele.title}
                    price={ele.price}
              mrp={ele.mrp} 
              save={ele.save}

         
              />
             
              </Grid>
              )
            }
        }
        )
    }
    <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"500px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKI0elTdC0l9XFLu1cxzDccTQ_xdezSUGjpg&usqp=CAU"  alt="LEDS"/>
      </Flex>
     
    </>



  );
};

export default Storages;
