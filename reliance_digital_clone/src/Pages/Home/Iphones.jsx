


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
    <div style={{width:"100%"}}>
    <h1 style={{fontSize:"30px", marginRight:"870px"}}> APPLE IPHONE 14 & 14 PLUS</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"350px"}} src="https://www.reliancedigital.in/medias/iPhone-14-Producst-Carousel-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMzgxMHxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaGQxLzk5MTM3NzcxMjc0NTQuanBnfDA0NzFkZmIwYjVlMWZjZjUxZGY5MjA3NmVlMTdiNTY0ZjhmODU1NjkxY2Y2NDRjNjUxOTQ2MTc5Nzg5MjQxZjk&usqp=CAU" />
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
     
    </div>



  );
};

export default Iphones;
