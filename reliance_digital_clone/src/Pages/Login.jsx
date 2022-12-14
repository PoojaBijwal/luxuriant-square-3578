import { Box,Input,Button,Text } from '@chakra-ui/react'


const Login = () => {
   
  return (
    <div style={{height:"300px"}}>
        <br/>
        <Box border="1px solid black" marginLeft="65%" width="500px" boxShadow='md' display="flex" flexDirection="column" height="250px" justifyContent="space-around" alignItems="center">
        <Text fontWeight="bold">Login/Register</Text>
        <Input type="number" placeholder='Enter Mobile Number' width="90%"/>
        <Button colorScheme='red' backgroundColor="#e42529" width="90%">PROCEED</Button>
        </Box>
        <br/>
    </div>
  )
}

export default Login