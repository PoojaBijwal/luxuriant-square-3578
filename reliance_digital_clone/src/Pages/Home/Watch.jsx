import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'
import "./Watch.css"
const Watch = ({url, title,price,mrp,save}) => {
 
  return (
    <div className="watch">
   
    <div style={{ width:"100%",
    height:"430px",
   
    display:"fles",
    gridTemplatecolumns:"repeat(3,1fr)",
    gap:"3%",imageHeight:"50%"}}>
       
       
    <Stack data-cy="watch">
      <Image data-cy="watch-image" src={url} style={{height:"230px"}} />
      <Text data-cy="watch-title" style={{color:"blue" }}> {title}</Text>
      <Tag>
        <TagLabel data-cy="watch-price"> Deal price: ₹ {price}</TagLabel>
      </Tag>
      {/* <Heading data-cy="watch-mrp"> M.R.P:₹ {mrp}</Heading> */}
      <Box data-cy="watch-save"> you Save:₹ {save}</Box>
    </Stack>
    <button>Offer Available</button>
    </div>
    </div>
  );
};

export default Watch;
