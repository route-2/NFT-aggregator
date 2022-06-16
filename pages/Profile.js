import {
    Box,
    Divider,
    Flex,
    Button,
    Image,
    Input,
    Text,
    Center,
    VStack,
    StackDivider,
    ButtonGroup,
    useColorModeValue,
    Stack,
    Heading,
    Hstack,
    SimpleGrid,
    
  } from "@chakra-ui/react";
  import * as React from "react";
  import SearchBar from "./Search";
  import { Icon } from "@chakra-ui/react";
  import Card from "./NftCard";
  
  import { useMetamask } from "./api/components/context/metamsk.context";
  import Navbar from "./api/components/Navbar";
  
  const Profile = () => {
    const { provider, walletAddress, balance } = useMetamask();
//  const Datalist =()=> {
//     {dataList.map(function (data) {
//         const { collection, name,image, price } = data;
//  }
  
    return (
      <>
        <SearchBar />
        <Box    height={"fit-content"}
          backgroundSize={"cover"}
          paddingBottom={"40px"}
          bgGradient="linear(to-br, #1F0942, #000000)"> 
          
        <Stack
        direction={ 'column' }
      
  spacing={4}
 
         
        >""
        <Center>
         <Box bgImg={"https://i.ibb.co/thGgrny/Rectangle-28profile.png"} justifyItems={"center"}  w={'190vw'} h={'20vh'}  mt={"30px"} mr={'30px'} ml={'30px'}> 
         
         
        <Center>  <Image   
         
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
  mt={'50px'}
  
  

 
 
/> </Center>

         
         </Box>
         </Center> 
         <Text fontSize={"3xl"} pt={'20px'} color={"white"} textAlign={'center'}  > MD MOHSIN </Text>
         <Center> <Box  width={"80%"}
            mt={"40px"}
            height={"60px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            borderRadius={"20px"}
            marginBottom={'20px'}
            
            
          > 
          <Center>
            <ButtonGroup >
                <Button variant={"ghost"} color={"white"}  mt={'10px'} >MY ITEMS</Button>
                <Button variant={"ghost"} color={"white"}  mt={'10px'} >LISTED ITEMS</Button>
                <Button variant={"ghost"} color={"white"}  mt={'10px'} >AUCTIONS</Button>
                
                <Button variant={"ghost"} color={"white"}  mt={'10px'} >OFFERS MADE</Button>
                
                <Button variant={"ghost"} color={"white"}  mt={'10px'} >OFFERS RECIEVED</Button>
                <Button variant={"ghost"} color={"white"} mt={'10px'}>ACTIVITIES</Button>

            </ButtonGroup>
            </Center> 
           
            
            
            </Box>
            </Center>
            </Stack>
            <Center> 
            <Flex direction={"row"} justifyContent={'center'} wrap={"wrap"} width={"182vh"} height={'fit-content'} >
              <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
                <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
               <Card/>
               

                </Flex>
              
            </Flex>
            </Center>
      
      
     
      </Box>
      
        
      </>
    );
  };
  
  export default Profile;
