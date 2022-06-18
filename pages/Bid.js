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
        <Flex alignItems={'center'} width={"50%"} mt={'10%'} direction={"column"} flex={'wrap'}>
          <Flex width={"80%"} height={"fit-content"} padding={'50px'} alignItems={'center'} textAlign={'center'} bgColor={"purple.800"} rounded={'3xl'} >
            <Text alignSelf={'center'} pl={'35%'} color={'white'} fontSize={'xl'} > DESCRIPTION OF NFT </Text>
          </Flex>
          <Flex flexDirection={'row'} width={'80%'} mt={'40px'} height={'fit-content'} justifyContent={'space-between'} >
            <Flex width={'45%'}  bgColor={'purple.900'} height={"200px"} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} >
              <Button bg={'purple.200'}>   <img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' width={"20px"}/> &nbsp; MATIC  </Button>
            </Flex>
            <Flex flexDirection={'column'} width={'45%'} bgColor={'purple.900'} height={"200px"} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} >
            <Button   bg={'purple.100'} >
          
          <img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' width={"20px"}/> &nbsp; PLACE BID 
           </Button>
              <Button bg={'purple.200'} mt={'10px'}> BUY NOW </Button>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Bid;
