//Bhavik Dholu fw20_0582
import React, { useEffect } from "react";
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
import { GetOrder } from "../Redux/Admin/admin.actions";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const {data,cancel,pending,process,delivered,total} = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOrder());
  }, []);
  return (
    <Box mt={50}>
      <Heading>Dashboard</Heading>
      <Divider />
      <Box w="90%" margin="auto" mt={50} color="white">
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing="20">
          <Flex
            bg="blue.400"
            align={"center"}
            justifyContent="space-between"
            p={3}
            borderRadius="10px"
          >
            <Box>
              <Text>Opening Order</Text>
              <Text>{data.length}</Text>
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
              <Text>{pending}</Text>
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
              <Text>{cancel}</Text>
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
              <Text>Order Proccess</Text>
              <Text>{process}</Text>
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
              <Text>₹{total}</Text>
            </Box>
            <Box w="40px" h="40px" p={1}>
              <GiTakeMyMoney fontSize={30} color="white" />
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
      <Box w="90%" margin="auto" mt={50} textAlign="left">
        <Heading as="h3" size="lg">
          Recent Orders
        </Heading>
        <Divider />
        <TableContainer mt="10px">
          <Table variant="striped" colorScheme="red">
            <TableCaption>Recent Orders</TableCaption>
            <Thead>
              <Tr bg="teal.300">
                <Th>Order ID</Th>
                <Th>Order Date</Th>
                <Th>Delivery Date</Th>
                <Th>Status</Th>
                <Th>Total</Th>
                <Th>Payment Type</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.date}</Td>
                  <Td>{order.Delivery_date}</Td>
                  <Td>
                    {
                      order.status === "pending"?<Badge colorScheme="orange">pending</Badge>:order.status === "cancel"?<Badge colorScheme="red">cancel</Badge>:order.status === "process"?<Badge colorScheme="blue">In process</Badge>:<Badge colorScheme="green">Delivered</Badge>
                    }
                  </Td>
                  <Td>{order.total}</Td>
                  <Td>Cash</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;

