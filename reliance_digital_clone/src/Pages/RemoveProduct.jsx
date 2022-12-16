//Bhavik Dholu fw20_0582
import React from "react";
import { Box, Flex, FormControl, FormLabel, Heading, Select, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";


function RemoveProduct() {
  const [category, setCategory] = React.useState("mobile");
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
          <Select placeholder="Select category">
            <option value={"mobile"}>Mobile</option>
            <option value={"mens Clothes"}>Mens Clothes</option>
            <option value={"womens Clothes"}>Womens Clothes</option>
            <option value={"shoes"}>Shoes</option>
          </Select>
        </FormControl>
      </Box>
      <Box color='white' w="80%" margin="auto" mt={10} >
      <Flex gap="20px">
        <Box
          align={"center"}
          justifyContent="space-between"
          bg='blue.400'
          p={3}
          borderRadius="10px"
        >
          <Box alignContent='center'>
            <Text>Category :- {category}</Text>
          </Box>
        </Box>
        <Box
          align={"center"}
          justifyContent="space-between"
          p={3}
          bg='blue.400'
          borderRadius="10px"
        >
          <Box>
            <Text>Total Products</Text>
            <Text>0</Text>
          </Box>
        </Box>
      </Flex>
      </Box>
      <Box w='80%' margin='auto'>
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
              <Tr>
                <Td>1</Td>
                <Td>Qubo Baby Cam Smart Camera, Black (Penguin Themed)</Td>
                <Td><DeleteIcon/></Td>
              </Tr>
              <Tr>
                <Td>1</Td>
                <Td>Qubo Baby Cam Smart Camera, Black (Penguin Themed)</Td>
                <Td><DeleteIcon/></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default RemoveProduct;
