import { Box, Divider,Button, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
import { IconButton } from '@chakra-ui/react'
const SearchBar = () => { 
return ( 
<>

    
      <Box  justifyContent={"center"} alignItems={'center'}  padding={"15px"} bgGradient='linear(to-br, #1F0942, #000000)' height={"fit-content"}  w={"100%"}  > 
      <Input   bg={"whiteAlpha.300"} backdropFilter={'auto'} backdropBlur={"2px"} rounded={"2xl"} placeholder='Search' w= {"50%"} ml={"25%"} />
     <Button ml={"170px"}  bgGradient='linear(to-l, purple.800, purple.200)'   > Mint Collection </Button>
       </Box>





</>
)



};
export default SearchBar;