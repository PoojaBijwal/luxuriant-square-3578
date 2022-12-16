//Bhavik Dholu fw20_0582
import React from "react";
import {
  Badge,
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
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
import { DownloadIcon, RepeatIcon } from "@chakra-ui/icons";
import { GiTakeMyMoney } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { MdPending } from "react-icons/md";

function Dashboard() {
  return (
    <Box mt={50}>
      <Heading>Dashboard</Heading>
      <Divider />
      <Box w="90%" margin="auto" mt={50} color="white">
        <SimpleGrid columns={5} spacing="20">
          <Flex
            bg="blue.400"
            align={"center"}
            justifyContent="space-between"
            p={3}
            borderRadius="10px"
          >
            <Box>
              <Text>Opening Order</Text>
              <Text>0</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <DownloadIcon boxSize={5} />
            </Box>
          </Flex>
          <Flex
            bg="orange.400"
            align={"center"}
            justifyContent="space-between"
            p={3}
            borderRadius="10px"
          >
            <Box>
              <Text>Pending Order</Text>
              <Text>0</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <MdPending fontSize={26} />
            </Box>
          </Flex>
          <Flex
            bg="red.400"
            align={"center"}
            justifyContent="space-between"
            p={3}
            borderRadius="10px"
          >
            <Box>
              <Text>Cancel Order</Text>
              <Text>0</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <ImCancelCircle fontSize={26} />
            </Box>
          </Flex>
          <Flex
            bg="blue.400"
            align={"center"}
            justifyContent="space-between"
            p={2}
            borderRadius="10px"
          >
            <Box>
              <Text>Order In Proccess</Text>
              <Text>0</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <RepeatIcon boxSize={5} />
            </Box>
          </Flex>
          <Flex
            bg="green.400"
            align={"center"}
            justifyContent="space-between"
            p={3}
            borderRadius="10px"
          >
            <Box>
              <Text>Total Income</Text>
              <Text>0</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <GiTakeMyMoney fontSize={30} color="white" />
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box w='90%' margin='auto' mt={50} textAlign='left'>
        <Heading as='h3' size='lg'>Recent Orders</Heading>
        <Divider />
        <TableContainer mt='10px'>
          <Table variant="striped" colorScheme='red'>
            <TableCaption>Recent Orders</TableCaption>
            <Thead>
              <Tr bg='teal.300'>
                <Th>Order ID</Th>
                <Th>Order Date</Th>
                <Th>Delivery Date</Th>
                <Th>Status</Th>
                <Th>Total</Th>
                <Th>Payment Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td><Badge colorScheme='green'>Success</Badge></Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;
