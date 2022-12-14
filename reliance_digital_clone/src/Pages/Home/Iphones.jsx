


import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Iphone from './Iphone'




const getData = (page) => {
  return axios.get(`https://ossified-cut-fact.glitch.me/iphones`)
}

const Iphones = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <>
    <h1 style={{marginRight:"50%"}}> APPLE IPHONE 14 & 14 PLUS</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"350px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuRdEqaXsus1L8F9Ngc1QFY43alGlQwDjsQ&usqp=CAU" />
        {
          arr.map((ele,index) =>{

              if(index<4){
                  return(

                      <Grid>
              <Iphone key={ele.id} 
              url={ele.url} 
              title={ele.title}
              price={ele.price}
              />
             
              </Grid>
              )
            }
        }
        )
            }
      </Flex>
     
    </>



  );
};

export default Iphones;
