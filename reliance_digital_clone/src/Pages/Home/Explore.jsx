

import React from "react";
import {Text, Image, Box,Stack,Heading, Tag, TagLabel} from '@chakra-ui/react'

const Explore = ({url}) => {
 
  return (
    <div className="watch">
   
    <div style={{ width:"90%",
   
   
    display:"fles",
    gridTemplatecolumns:"repeat(5,1fr)",
    gap:"3%",imageHeight:"100%",margin:"auto"}}>
       
       
    <Stack data-cy="watch">
      <Image data-cy="watch-image" src={url} style={{width:"100%",height:"300px"}} />
    
    </Stack>
    </div>
    </div>
  );
};

export default Explore;
