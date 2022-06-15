import { Box, Divider,Select, Flex,Button,Image, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import SearchBar from './Search'

import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const Mint = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
    
    <SearchBar/>
    <Flex height={"100vh"} backgroundSize={"cover"}  bgGradient='linear(to-br, #1F0942, #000000)'> 
    
    

   
            
            
            <Box flex='1' ml={"100px"} mt={"30px"} >
            
             <Box  width={'500px'} mt={'100px'} height={"390px"} mr={"80px"} padding={"20px"} borderRadius={"20px"} bg={"whiteAlpha.300"} backdropFilter={'auto'} backdropBlur={"2px"}>
            <Text fontFamily={"mono"} fontSize={"2xl"} color={'white'} > Attributes</Text>
        </Box>
        
      
            
        

            </Box>
            <Box flex='2' mt={"30px"} >
            <Box width={"700px"} mt={"100px"} height={"390px"} bg={"whiteAlpha.300"} backdropFilter={'auto'} backdropBlur={"2px"} ml={"30%"} borderRadius={"20px"}> 
            <Text ml={'40px'} pt={"20px"} fontFamily={"mono"} fontSize={"2xl"} color={'white'}> Mint Address </Text><Input  mt={"70px"}  bg={"white"} backdropFilter={'auto'} backdropBlur={"2px"} rounded={"2xl"} placeholder='' w= {"50%"} ml={"40%"} />   
            <Text ml={'40px'} pt={"20px"} fontFamily={"mono"} fontSize={"2xl"} color={'white'}> Mint Address </Text><Input mt={"70px"}  bg={"white"} backdropFilter={'auto'} backdropBlur={"2px"} rounded={"2xl"} placeholder='' w= {"50%"} ml={"40%"} />   
            <Text ml={'40px'} pt={"20px"} fontFamily={"mono"} fontSize={"2xl"} color={'white'}> Mint Address </Text><Input mt={"70px"}  bg={"white"} backdropFilter={'auto'} backdropBlur={"2px"} rounded={"2xl"} placeholder='' w= {"50%"} ml={"40%"} />   
        
        
        
        
        </Box>
       
        
            
            </Box>
        </Flex>
        

 
    </>
  );
};

export default Mint;
