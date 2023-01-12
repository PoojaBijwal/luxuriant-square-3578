//Bhavik Dholu fw20_0582
import React from "react";
import { Box, Heading, Divider, FormControl, Select, FormLabel, Input, Button, } from "@chakra-ui/react";
import {useToast}  from '@chakra-ui/react';
import {useDispatch} from "react-redux";
import { AdminAddProduct } from "../Redux/Admin/admin.actions";

const init = {
  title : "",
  price : 0,
  category : "",
  image : "",
  description : ""
}

function AddProduct() {
  const [detail,setDetail] = React.useState(init);
  const dispatch = useDispatch();
  const toast = useToast()

  const handleChange = (e)=>{
     const {name,value} = e.target;
     setDetail({...detail,[name]:value});
  }
  const handleAdd = (e)=>{
    e.preventDefault();
    dispatch(AdminAddProduct(detail.category,detail));
    setDetail(init);
    toast({
      description: "Product Added Successfully",
      status: 'success',
      duration: 2000,
      position: 'top-right',
      isClosable: true,
    })
  }

const {title,price,image,category,description} = detail;

  return (
    <Box mt={5}>
      <Heading>Add Product</Heading>
      <Divider />
      <Box w='80%' margin='auto' border='1px solid gray' borderRadius={10} p={5} mt={5}>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input placeholder="Product name" name="title" value={title} onChange={handleChange}/>
            {/* <FormLabel>Stock</FormLabel>
            <Input placeholder="Number of Product" name="stock" value={stock} onChange={handleChange}/> */}
            <FormLabel>Price</FormLabel>
            <Input placeholder="Product Price" name="price" value={price} onChange={handleChange}/>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select country" name="category" value={category} onChange={handleChange}>
              <option value={'mobile'}>Mobile</option>
              <option value={"men_clothes"}>Men's Clothes</option>
              <option value={"women_clothes"}>Women's Clothes</option>
              <option value={'camera'}>Camera</option>
            </Select>
            <FormLabel>Image</FormLabel>
            <Input placeholder="Product Image url" name="image" value={image} onChange={handleChange}/>
            <FormLabel>Description</FormLabel>
            <Input placeholder="Product Description" name="description" value={description} onChange={handleChange}/>
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            onClick={handleAdd}
          >
            Add Product
          </Button>
      </Box>
    </Box>
  );
}

export default AddProduct;


