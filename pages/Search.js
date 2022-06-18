import { Box, Divider,Link, Button,AvatarGroup,Avatar,AiOutlineUser,Image, Hstack, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import { IconButton } from "@chakra-ui/react";
import Homepage from "./Homepage";
const SearchBar = () => {
  
  return (
    <>
    <Flex justifyContent={"space-between"} padding={'10px'} bgGradient="linear(to-br, #1F0942, #000000)"> 
    <Box w='70px' h='10'   > 
    <Link href='./Homepage'> 
    <img
  
  mt={'10px'}
  ml={"40px"}
  mb={'10px'}
 

  src='https://i.ibb.co/d4jf3vj/Pngtree-add-user-icon-4479737.png'
 
  
/>
</Link>

</Box>




  
     
     
     
     
     
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
