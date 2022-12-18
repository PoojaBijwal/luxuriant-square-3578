// Bhavik Dholu fw20_0582
import {Route,Routes} from "react-router-dom";
import React from 'react'
import {Box} from "@chakra-ui/react";
import AdminNavbar from '../Components/AdminNavbar';
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import ManageOrder from "./ManageOrder";


function Admin() {
  return (
    <Box>
       <AdminNavbar />
       <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/removeproduct" element={<RemoveProduct/>} />
        <Route path="/manageorder" element={<ManageOrder/>} />
       </Routes>
       hello
    </Box>
  )
}

export default Admin