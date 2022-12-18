//Bhavik Dholu fw20_0582
import React from "react";
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

const init = {
  delivery_Date : "",
  status : "pending"
}

function ManageOrder() {
  const [change,setChange] = React.useState(init);
  
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setChange({...change,[name]:value});
  }

  const handleSave = ()=>{
    console.log(change);
    Toast({
      description: "Edit Successfully",
      status: 'success',
      duration: 2000,
      position: 'top-right',
      isClosable: true,
    });
  }

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
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>
                  <Badge colorScheme="green">Success</Badge>
                </Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>
                  <ModalSec handleChange={handleChange} handleSave={handleSave} change={change}/>
                </Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td>30.48</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>
                  <ModalSec handleChange={handleChange} handleSave={handleSave} change={change}/>
                </Td>
              </Tr>
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
                placeholder="Select country"
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



