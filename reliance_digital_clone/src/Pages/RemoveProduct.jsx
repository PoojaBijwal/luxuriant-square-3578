//Bhavik Dholu fw20_0582
import React from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminGetProduct,
  AdminRemoveProduct,
} from "../Redux/Admin/admin.actions";

function RemoveProduct() {
  const Product_Data = useSelector((store) => store.admin.data);
  const [category, setCategory] = React.useState("mobile");
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDelete =(id)=>{
    dispatch(AdminRemoveProduct(category,id))
  }

  React.useEffect(() => {
    dispatch(AdminGetProduct(category));
  }, [category]);
  return (
    <Box mt={5}>
      <Heading>Remove Product</Heading>
      <Box
        w="80%"
        margin="auto"
        border="1px solid gray"
        borderRadius={10}
        p={5}
        mt={5}
      >
        <FormControl>
          <FormLabel>Select By Category</FormLabel>
          <Select placeholder="Select category" onChange={handleCategory}>
            <option value={"mobile"}>Mobile</option>
            <option value={"men_clothes"}>Mens Clothes</option>
            <option value={"women_clothes"}>Womens Clothes</option>
            <option value={"camera"}>Camera</option>
          </Select>
        </FormControl>
      </Box>
      <Box color="white" w="80%" margin="auto" mt={10}>
        <Flex gap="20px">
          <Box
            align={"center"}
            justifyContent="space-between"
            bg="blue.400"
            p={3}
            borderRadius="10px"
          >
            <Box alignContent="center">
              <Text>Category :- {category}</Text>
            </Box>
          </Box>
          <Box
            align={"center"}
            justifyContent="space-between"
            p={3}
            bg="blue.400"
            borderRadius="10px"
          >
            <Box>
              <Text>Total Products</Text>
              <Text>{Product_Data.length}</Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box w="80%" margin="auto">
        <TableContainer mt="10px">
          <Table variant="striped" colorScheme="red">
            <TableCaption>Recent Orders</TableCaption>
            <Thead>
              <Tr bg="teal.300">
                <Th>Product ID</Th>
                <Th>Product Name</Th>
                <Th>Remove</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Product_Data?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.title}</Td>
                  <Td>
                    <DeleteIcon onClick={()=>handleDelete(product.id)}/>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default RemoveProduct;
