
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
    <>
    <h1 style={{marginRight:"50%"}}> UP TO 75% OFF ON MONITORS |</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px",height:"300px",width:"350px",backgroundColor:"black"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQAndf2JzS1B0CTetM4ne3P8xPovjfVCpOA&usqp=CAU" />
         
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
     
    </>



  );
};

export default Monitors;
