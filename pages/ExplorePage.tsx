import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";


import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const ExplorePage = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
    <Flex height={"100vh"} bgGradient='linear(to-br, #0A0081, #000000)'> 
    
      <Box rounded={"xl"} justifyContent={"center"} alignItems={'center'} bg={"gray.100"} padding={"15px"} height={"fit-content"} ml={"80px"} w={"80%"} mt={"40px"} > 
      <Input  bg={"blue.200"}  rounded={"2xl"} placeholder='Search' w= {"600px"} />
     </Box>

      </Flex>
    </>
  );
};

export default ExplorePage;
