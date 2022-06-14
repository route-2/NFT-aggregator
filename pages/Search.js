import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";
import * as React from "react";
const SearchBar = () => { 
return ( 
<>

    
      <Box  justifyContent={"center"} alignItems={'center'}  padding={"15px"} bgGradient='linear(to-br, #1F0942, #000000)' height={"fit-content"}  w={"100%"}  > 
      <Input  bg={"whiteAlpha.300"} backdropFilter={'auto'} backdropBlur={"2px"} rounded={"2xl"} placeholder='Search' w= {"50%"} ml={"20.5%"} />
     </Box>





</>
)



};
export default SearchBar;