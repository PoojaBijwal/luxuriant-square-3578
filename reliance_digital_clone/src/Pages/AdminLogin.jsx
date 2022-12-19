// Bhavik Dholu fw20_0582

import React, {useState } from "react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adminLogin } from "../Redux/Admin/admin.actions";


const init = {
    user:"",
    password:""
}
const AdminLogin = () => {
  const navigate = useNavigate();
  const [detail,setDetail] = useState(init);
  const dispatch = useDispatch()

  const handleChange = (e)=>{
   const {name,value} = e.target;
   setDetail({...detail,[name]:value});
  }
  const handleClick = ()=>{
    if(detail.user === "Bhavik" && detail.password==="1234"){
        dispatch(adminLogin());
        navigate("/");
    }else{
        alert('please fill right cred.')
    }
  }

  return (
    <div style={{ height: "300px" }}>
      <br />
      <Box
        margin="auto"
        width="500px"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        height="250px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text fontWeight="bold">Login/Register</Text>
        <Input
          type="text"
          placeholder="Admin User"
          width="90%"
          name="user"
          value={user}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Enter Password"
          width="90%"
          name="password"
          value={password}
          onChange={handleChange}
        />
        
        <Button
          colorScheme="red"
          width="90%"
          onClick={handleClick}
        >
          PROCEED
        </Button>
      </Box>
      <br />
    </div>
  );
};

export default AdminLogin;
