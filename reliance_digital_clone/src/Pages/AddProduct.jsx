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

/*
{
    "id": 1,
    "title": "Qubo Baby Cam Smart Camera, Black (Penguin Themed)",
    "price": 4990,
    "description": "If you are photography enthusiast then Featuring an 18 MP (APS-C) CMOS sensor and the DIGIC 4+ imaging processor, you can capture amazing photos of your subject at all times, even in low-light conditions",
    "category": "camera",
    "image": "https://www.reliancedigital.in/medias/Qubo-QUBO-BABY-CAM-Smart-Cameras-491936008-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzM3NXxpbWFnZS9qcGVnfGltYWdlcy9oOTYvaGRkLzk0MTY2MzkwMjEwODYuanBnfDZiZWRkYTc2YzFlODk0MjYwNjc1ZWIyODhmOWIzMzlhMjJlMmJkNmE2ZDE5NjFmNWUyNTI4NzVmMjA1Mzk3NDQ",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
*/
