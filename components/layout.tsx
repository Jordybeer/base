import React from "react";
import { Box } from "@chakra-ui/react";
import SidebarWithHeader from "../components/sidebarwithheader";
const Layout = ({ children }) => {
  return (
    //main
    
    <Box
      minHeight="100vh"
      display="flex"
      // bgColor='#242424'
      flexDirection="column"

      bgGradient="linear(to bottom right, #5c3c6d, #2e51bb)"

      color='white'
      borderRight= " solid #03435f"
      scrollBehavior="smooth"
      borderRadius="xs"



    >
      <SidebarWithHeader />
      {/* Footer / Fooder CSS */}
    </Box>
  );
};

export default Layout;
