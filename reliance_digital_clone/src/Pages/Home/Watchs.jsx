
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
    <div style={{width:"100%"}}>
    <h1 style={{fontSize:"30px", marginRight:"750px"}}>  SMARTWATCHES STARTING FROM 999</h1>

      <Flex>
          <img style={{marginRight:"20px",marginBottom:"20px"}} src="https://www.reliancedigital.in/medias/Apple-Watches-Producst-Carousel-29-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NTYyOHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDQyLzk5MjgzNzA5Nzg4NDYuanBnfDg5OTE2MzFkOTU2YmI1ODhjOTZmODQ2YzkyNjUzNjYwZTYxZGQ2NGY4OTdhNmU3YjBkZGZmZGI3MzM2OWQwNzQ" />
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
     
    </div>



  );
};

export default Watchs;
