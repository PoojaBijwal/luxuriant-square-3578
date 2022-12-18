
import React, { useState } from "react";
import { Flex, Grid } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect } from "react";
import Monitor from './Monitor'




const getData = (page) => {
  return axios.get(`https://anjuserver.onrender.com/monitors`)
}

const Monitors = () => {
  const [arr, setArr] = React.useState([])
  const [page, setPage] = useState(1)


  useEffect(() => {
    getData(page).then((res) => setArr(res.data))
  }, [page])

  

  return (
    <div style={{width:"100%"}}>
    <h1 style={{fontSize:"30px", marginRight:"800px"}}> UP TO 75% OFF ON MONITORS |</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"350px",backgroundColor:"black"}} src="https://www.reliancedigital.in/medias/Lenovo-L24I-30-Monitor-492849964-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDc1OHxpbWFnZS9qcGVnfGltYWdlcy9oOTYvaDRlLzk4MTczMjkyNzA4MTQuanBnfGI5MGRiMTU5MzFmMTk1ZWUxYWZiZDg2Zjc3ZjFjZmZjNzEyOGEwMTU5Njk5NDFkMWQ3Yzg2MmI0MTI2MDRjOGU" />
         
        {
          arr.map((ele,index) =>{

              if(index<4){
                  return(

                      <Grid>
              <Monitor key={ele.id} 
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
     
    </div>



  );
};

export default Monitors;
