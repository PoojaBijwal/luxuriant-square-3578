
import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Watch from './Watch'
import "./Watch.css"



const getData = (page) => {
  return axios.get(`https://anjuserver.onrender.com/watch`)
}

const Watchs = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <>
    <h1 style={{marginRight:"50%"}}>  SMARTWATCHES STARTING FROM 999</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px"}} src="https://www.reliancedigital.in/medias/Smartwatches-Producst-Carousel-27-10-2022-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA3NTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2gxYS85OTEzNzc2Nzk5Nzc0LmpwZ3w0YzI5OWYwMDI2YzYzMGJiZmRhZGRhZGQyNWIwNTc1OGVmZDRlZmY2NmYzN2E4ZDdkZjMxMzRkM2QxMGYzNmQy" />
        {
          arr.map((ele,index) =>{

              if(index<4){
                  return(

                      <Grid>
              <Watch key={ele.id} 
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
      </Flex>
     
    </>



  );
};

export default Watchs;
