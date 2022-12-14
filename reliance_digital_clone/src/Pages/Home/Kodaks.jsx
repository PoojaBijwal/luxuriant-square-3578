

import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Kodak from './Kodak'
// import "./Watch.css"



const getData = (page) => {
  return axios.get(`https://anjuserver.onrender.com/leds`)
}

const Kodaks = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <>
    <h1 style={{marginRight:"50%"}}> LED TV  STARTING FROM 7499</h1>

      <Flex>
        {
          arr.map((ele,index) =>{

              if(index<3){
                  return(

                      <Grid>
              <Kodak key={ele.id} 
              url={ele.url} 
              title={ele.title}
           
              mrp={ele.mrp} 

         
              />
             
              </Grid>
              )
            }
        }
        )
    }
    <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPggQGM7oCKrii-aQT9ZpDcmJnTIEOaVXcA&usqp=CAU"  alt="LEDS"/>
      </Flex>
     
    </>



  );
};

export default Kodaks;
