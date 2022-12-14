import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'
import "./Watch.css"
const Led = ({url, title,price,mrp,save}) => {
 
  return (
    <div className="watch" >
   
    <div style={{ width:"90%",
    height:"370px",
   
    display:"fles",
    gridTemplatecolumns:"repeat(5,1fr)",
    gap:"3%",imageHeight:"50%"}}>

      
       
       
    <Stack data-cy="watch">
      <Image data-cy="watch-image" src={url} style={{height:"150px"}} />
      <Text data-cy="watch-title" style={{color:"blue" }}> {title}</Text>
      <Tag>
        <TagLabel data-cy="watch-price"> Deal price: ₹ {price}</TagLabel>
      </Tag>
      <Heading data-cy="watch-mrp" style={{  verticlAlign: "middle"}}> M.R.P:₹ {mrp}</Heading>
      <Box data-cy="watch-save"> you Save:₹ {save}</Box>
    </Stack>
    <button>Offer Available</button>
    </div>
    </div>
  );
};

export default Led;
