import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'

const Iphone = ({url, title,price}) => {
 
  return (
    <div className="watch">
   
    <div style={{ width:"90%",
    height:"350px",
    gridTemplatecolumns:"repeat(3,1fr)",
    gap:"30px",imageHeight:"50%"}}>
       
       
    <Stack data-cy="iphone">
      <Image data-cy="iphone-image" src={url} style={{height:"160px"}} />
      <Text data-cy="iphone-title" style={{color:"blue" }}> {title}</Text>
      <Tag>
        <TagLabel data-cy="iphone-price"> Deal price: ₹ {price}</TagLabel>
      </Tag>
    </Stack>
    <button>Offer Avaulable</button>
    </div>
    </div>
  );
};

export default Iphone;
