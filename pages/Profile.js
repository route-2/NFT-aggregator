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
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Link,
    
    
  } from "@chakra-ui/react";
  import * as React from "react";
  import SearchBar from "./Search";
  import { Icon } from "@chakra-ui/react";
  import Card from "./NftCard";
  import Nftdatalist from './Nftdatalist.json'
  import { useState } from "react";
  
  import { useMetamask } from "./api/components/context/metamsk.context";
  import Navbar from "./api/components/Navbar";
  
  const Profile = () => {
    const { provider, walletAddress, balance } = useMetamask();
    const colors = useColorModeValue(
      ['red.50', 'teal.50', 'blue.50'],
      ['red.90','purple.50',  'blue.90'],)
      const [tabIndex, setTabIndex] = useState('')
      
  
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
         
          <Center>
          <Tabs isFitted  variant='soft-rounded' onChange={(index) => setTabIndex(index)}  >
  <TabList textAlign={'center'} colorScheme='purple.200'>
    <Tab>  MY ITEMS </Tab>
    <Tab>  LISTED ITEMS </Tab>
    {/* <Tab>  AUCTIONS </Tab>
    <Tab> OFFERS MADE </Tab>
    <Tab>  OFFERS RECIEVED </Tab>
    <Tab>  ACTIVITIES </Tab> */}

    
  </TabList>

  <TabPanels color={'white'}>

    <TabPanel>
    <Flex direction={"row"} justifyContent={'center'} wrap={"wrap"} width={"182vh"} height={'fit-content'} >
              <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
              <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
              <Flex justifyContent={"center"} wrap={"wrap"} >
        {Nftdatalist.map((nft,index) => {
        return (  <Link href='./Bid'> <Box marginTop={"50px"}  marginLeft={"20px"} >
          <Card key={index} singlenft={nft} />
        </Box>
        </Link>
        );
      })}
        </Flex>  
           
                </Flex>
                </Flex>
              
            </Flex>
      
    </TabPanel>
    <TabPanel>
    <Flex direction={"row"} justifyContent={'center'} wrap={"wrap"} width={"182vh"} height={'fit-content'} >
              <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
              <Flex justifyContent={"center"} wrap={"wrap"} >
        {Nftdatalist.map((nft,index) => {
        return (  <Link href='./Bid'> <Box marginTop={"50px"}  marginLeft={"20px"} >
          <Card key={index} singlenft={nft} />
        </Box>
        </Link>
        );
      })}
        </Flex>  
           
                </Flex>
              
            </Flex>
      
    </TabPanel>
    <TabPanel>
    <Flex direction={"row"} justifyContent={'center'} wrap={"wrap"} width={"182vh"} height={'fit-content'} >
              <Flex direction={"column"} alignItems={"center"} justifyContent={"center"} margin={"10px"} width={"fit-content"} height={"fit-content"} bgColor={"#1F0942"} >
               
              <Flex justifyContent={"center"} wrap={"wrap"} >
        {Nftdatalist.map((nft,index) => {
        return (  <Link href='./Bid'> <Box marginTop={"50px"}  marginLeft={"20px"} >
          <Card key={index} singlenft={nft} />
        </Box>
        </Link>
        );
      })}
        </Flex>  

                </Flex>
              
            </Flex>
      
    </TabPanel>
    
    
  </TabPanels>
</Tabs>
            </Center> 
           
            
            
            
            </Stack>
            <Center> 
           
            </Center>
      
      
     
      </Box>
      
        
      </>
    );
  };
  
  export default Profile;
