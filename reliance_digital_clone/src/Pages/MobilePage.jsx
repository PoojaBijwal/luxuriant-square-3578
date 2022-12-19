// Bhavik Dholu fw20_0582
import React from 'react';
import {Box, SimpleGrid} from "@chakra-ui/react";
import {useDispatch,useSelector} from "react-redux";
import { AdminGetProduct } from '../Redux/Admin/admin.actions';
import ProductCard from '../Components/ProductCard';
import { AppContext } from '../context/AppContext'


function MobilePage() {
  const {Mobile} = useContext(AppContext)
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(AdminGetProduct("mobile"));
    },[])
  return (
    <Box w="90%" margin="auto">
       <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={10}>
        {
            Mobile?.map((product)=><ProductCard id={product.id} key={product.id} title={product.title} category={product.category} price={product.price} desc={product.description} image={product.image}/>)
        }
       </SimpleGrid>
    </Box>
  )
}

export default MobilePage


