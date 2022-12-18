// Bhavik Dholu fw20_0582
import React from 'react';
import {Box, SimpleGrid} from "@chakra-ui/react";
import {useDispatch,useSelector} from "react-redux";
import { AdminGetProduct } from '../Redux/Admin/admin.actions';
import ProductCard from '../Components/ProductCard';


function WomenClothesPage() {
    const product_Data = useSelector((store)=>store.admin.data);
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(AdminGetProduct("women_clothes"));
    },[])
  return (
    <Box w="90%" margin="auto">
       <SimpleGrid columns={{base:1,md:2,lg:4}} spacing={10}>
        {
            product_Data?.map((product)=><ProductCard id={product.id} key={product.id} title={product.title} price={product.price} desc={product.description} image={product.image}/>)
        }
       </SimpleGrid>
    </Box>
  )
}

export default WomenClothesPage


