
import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'
// import "./Watch.css"
const Kodak = ({url, title,mrp}) => {
 
  return (
    <div className="watch">
   
    <div style={{ width:"90%",
    height:"370px",
   
    display:"fles",
    gridTemplatecolumns:"repeat(3,1fr)",
    gap:"3%",imageHeight:"50%"}}>
       
       
    <Stack data-cy="watch">
      <Image data-cy="watch-image" src={url} style={{height:"180px"}} />
      <Text data-cy="watch-title" style={{color:"blue" }}> {title}</Text>
      <Tag>
      </Tag>
      <Heading data-cy="watch-mrp"> M.R.P:₹ {mrp}</Heading>
    </Stack>
    <button>Offer Available</button>
    </div>
    </div>
  );
};

export default Kodak;
