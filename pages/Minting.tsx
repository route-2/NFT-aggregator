import {
  Box,
  Divider,
  Select,
  Flex,
  Button,
  Image,
  Input,
  Text,
  Spacer,
} from "@chakra-ui/react";
import * as React from "react";
import SearchBar from "./Search";
import { RiSwapLine } from "react-icons/ri";
import { useState } from "react";

import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const Mint = () => {
  const { provider,chain, walletAddress, balance } = useMetamask();
  const[mintAddr,setMintAddr]=useState('');
  const[tokenAddr,setTokenAddr]=useState('');
  const[ownerAddr,setOwnerAddr]=useState('');



  return (
    <>
      <SearchBar />
      <Flex
        height={"150vh"}
        backgroundSize={"cover"}
        bgGradient="linear(to-br, #1F0942, #000000)"
        wrap={'wrap'}
      >
        <Flex width={'50%'}  textAlign={'center'}> 
        <Box flex="1" ml={"100px"} >
          <Box
            width={"500px"}
            mt={"10%"}
            height={"390px"}
           ml={'15%'}
            padding={"20px"}
            borderRadius={"20px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
          >
            <Text fontFamily={"mono"} fontSize={"2xl"} color={"white"}>
              {" "}
              Attributes
            </Text>
          </Box>
        </Box>
        </Flex>
        <Flex > 
        <Box >
          <Box
            width={"700px"}
           mt={'10%'}
            height={"390px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
           ml={'15%'}
            borderRadius={"20px"}
            
            
          >
            <Text
              ml={"40px"}
              pt={"30px"}
              fontFamily={"mono"}
              fontSize={"2xl"}
              color={"white"}
            >
              {" "}
              Mint Address{" "}
              <Input
             
              bg={"white"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
              rounded={"2xl"}
              placeholder=""
              w={"50%"}
              ml={'20px'}
              onChange={(e)=>setMintAddr(e.target.value)}
              
            />
            </Text>
            
            <Text
              ml={"40px"}
              pt={"20px"}
              fontFamily={"mono"}
              fontSize={"2xl"}
              color={"white"}
            >
              {" "}
              Token Address{" "}
              <Input
              
              bg={"white"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
              rounded={"2xl"}
              placeholder=""
              w={"50%"}
              ml={'10px'}
              onChange={(e)=>setTokenAddr(e.target.value)}
             
            />
            </Text>
           
            <Text
              ml={"40px"}
              pt={"20px"}
              fontFamily={"mono"}
              fontSize={"2xl"}
              color={"white"}
            >
              {" "}
              Owner{" "}
              <Input
             
              bg={"white"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
              rounded={"2xl"}
              placeholder=""
              w={"50%"}
              ml={'115px'}
              onChange={(e)=>setOwnerAddr(e.target.value)}

             
            />
            </Text>
            <Text
              ml={"40px"}
              pt={"20px"}
              fontFamily={"mono"}
              fontSize={"2xl"}
              color={"white"}
            >
              {" "}
              Chain <Spacer/>
              {chain}
            
            </Text>
            
          </Box>
        </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Mint;
