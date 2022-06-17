import {
  Box,
  Divider,
  Select,
  Flex,
  Button,
  Image,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import * as React from "react";
import SearchBar from "./Search";

const Bid = () => {
  return (
    <>
      <SearchBar />
      <Flex
        direction={"row"}
        wrap={"wrap"}
        height={"150vh"}
        width={'100vw'}
        backgroundSize={"cover"}
        bgGradient="linear(to-br, #1F0942, #000000)"
      >
        <Flex width={"50%"} >
        <Box  ml={"100px"} mt={"30px"}>
          <Box
            width={"500px"}
            mt={"100px"}
            mr={"80px"}
            padding={"20px"}
            borderRadius={"20px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
          >
            <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
          </Box>

          <Box
            width={"500px"}
            mt={"40px"}
            height={"90px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            borderRadius={"20px"}
          >
            <Text
              fontSize={"2xl"}
              color={"white"}
              textAlign={"center"}
              pt={"20px"}
            >
              {" "}
              Collection #2111{" "}
            </Text>
          </Box>
        </Box>
        
        
        
        
         </Flex>
        <Flex width={"50%"} direction={"column"}>
          <Flex direction={"column"}>
            <Flex width={"50%"}> 
            <Box  mt={"30px"}>
          <Box
            width={"500px"}
            mt={"100px"}
            height={"190px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            ml={"40%"}
            borderRadius={"20px"}
          >
            <Text
              fontSize={"2xl"}
              color={"white"}
              textAlign={"center"}
              pt={"20px"}
            >
              {" "}
              About NFTs{" "}
            </Text>
            <Box
            width={"200px"}
            mt={"50%"}
            height={"190px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            
            borderRadius={"20px"}
           
          >
          <Center> 
          <Button mt={'30% '}>
          
          MATIC 
           </Button>
           </Center> 
           
          </Box>
          </Box>
          </Box>
         
            
            
            
            
            
            </Flex>
            <Flex direction={'column'}> 
            <Box
            width={"200px"}
            mt={"8%"}
            height={"190px"}
            bg={"transparent"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            
            borderRadius={"20px"}
            ml={'50%'}
           
          >
          <Center> 
          <Button mt={'30% '}>
          
          <img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' width={"20px"}/> &nbsp; PLACE BID 
           </Button>
           
           </Center> 
           <Center> 
           <Button mt={'30% '}>
          
          BUY NOW 
           </Button>
           </Center>
          </Box>
          
           
            
            
            
            
            
            
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Bid;
