import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";


import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const ExplorePage = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
    <Flex height={"100vh"} backgroundSize={"cover"}  bgGradient='linear(to-br, #1F0942, #000000)'> 
    
      <Box rounded={"2xl"} justifyContent={"center"} alignItems={'center'} bg={"whiteAlpha.300"} backdropFilter={'auto'} backdropBlur={"2px"} padding={"15px"} height={"fit-content"} ml={"400px"} w={"60%"} mt={"40px"} > 
      <Input  bg={"purple.200"}  rounded={"2xl"} placeholder='Search' w= {"50%"} ml={"300px"} />
     </Box>

      </Flex>
    </>
  );
};

export default ExplorePage;
