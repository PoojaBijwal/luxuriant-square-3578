


import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Explore from './Explore'
// import "./Watch.css"



const getData = (page) => {
  return axios.get(`https://ossified-cut-fact.glitch.me/explore`)
}

const Explores = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <>

      <Flex>
        {
          arr.map((ele,index) =>{

              if(index<5){
                  return(

                      <Grid>
              <Explore key={ele.id} 
              url={ele.url}
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

export default Explores;
