import { Box, Divider, Button,Hstack, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import { IconButton } from "@chakra-ui/react";
const SearchBar = () => {
  return (
    <>
    <Flex justifyContent={"space-between"}  bgGradient="linear(to-br, #1F0942, #000000)"> 
      <Box
        justifyContent={"center"}
       
        padding={"15px"}
       
        height={"fit-content"}
        flexDirection={'row'}
        w={"100%"}
      >
      
        <Input
          bg={"whiteAlpha.300"}
          backdropFilter={"auto"}
          backdropBlur={"2px"}
          rounded={"2xl"}
          placeholder="Search"
          w={"50%"}
          ml={"25%"}
        />
        </Box> 
        <Box>
        <Button mr={'40px'} mt={'15px'} bgGradient="linear(to-l, purple.800, purple.200)">
          {" "}
          Mint Collection{" "}
        </Button>
       
      </Box>
      </Flex>
     
    </>
  );
};
export default SearchBar;
