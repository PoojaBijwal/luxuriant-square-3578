//Bhavik Dholu fw20_0582
import React, { useEffect } from "react";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Toast,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { GetOrder, updateStatus } from "../Redux/Admin/admin.actions";
import { useDispatch, useSelector } from "react-redux";

const init = {
  Delivery_Date : "",
  status : "pending"
}

function ManageOrder() {
  const {data} = useSelector((store) => store.admin);
  const dispatch = useDispatch();

  
const [change,setChange] = React.useState(init);

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setChange({...change,[name]:value});
  }

  const handleSave = (id)=>{
    // console.log(change);
    dispatch(updateStatus(id,change))
    Toast({
      description: "Edit Successfully",
      status: 'success',
      duration: 2000,
      position: 'top-right',
      isClosable: true,
    });
  }

  useEffect(() => {
    dispatch(GetOrder());
  }, []);

  return (
    <Box>
      <Heading>Manage Orders</Heading>
      <Divider />
      <Box w="90%" margin="auto" mt={50} textAlign="left">
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
                <Th>Manage Order</Th>
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
                  <Td>
                  <ModalSec handleChange={handleChange} handleSave={()=>handleSave(order.id)} change={change}/>
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

export default ManageOrder;

function ModalSec(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {handleChange,handleSave,change} = props;
  const {status,delivery_Date} = change;


  const handleConfirm = ()=>{
    onClose();
    handleSave();
    
  }

  return (
    <>
      <Button onClick={onOpen}>Edit</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Manage Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Delivery Date</FormLabel>
              <Input placeholder="Select Date and Time" size="md" type="date" name="delivery_Date" value={delivery_Date} onChange={handleChange}/>
              <FormLabel>Status</FormLabel>
              <Select
                placeholder="Select status"
                name="status"
                value={status}
                onChange={handleChange}
              >
                <option value={"pending"}>Pending</option>
                <option value={"cancel"}>Cancel</option>
                <option value={"process"}>In Process</option>
                <option value={"Delivered"}>Delivered</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleConfirm}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

};




