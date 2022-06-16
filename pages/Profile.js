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
        <Box    height={"100vh"}
          backgroundSize={"cover"}
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
          
<Stack  direction={ 'row' }
      
      spacing={4} > 
            <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
    
        zIndex={1}
          >
  
        <Box
          rounded={'lg'}
          mt={-10}
          pos={'relative'}
          height={'230px'}
         
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url("https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png")`,
            filter: 'blur(15px)',
            zIndex: -1,
            
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={"https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png"}
          />
        </Box>
       
          <Text pt={"30px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            NFT COLLECTION #2535
          </Text>
          <Heading pt={"30px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            MONKEY PUNKS
          </Heading>
         
            <Text pt={"30px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
           
          
        
      </Box>




      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
    
        zIndex={1}
          >
  
        <Box
          rounded={'lg'}
          mt={-10}
          pos={'relative'}
          height={'230px'}
         
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url("https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png")`,
            filter: 'blur(15px)',
            zIndex: -1,
            
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={"https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png"}
          />
        </Box>
       
          <Text pt={"30px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            NFT COLLECTION #2535
          </Text>
          <Heading pt={"30px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            MONKEY PUNKS
          </Heading>
         
            <Text pt={"30px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
           
          
        
      </Box> 
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
    
        zIndex={1}
          >
  
        <Box
          rounded={'lg'}
          mt={-10}
          pos={'relative'}
          height={'230px'}
         
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url("https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png")`,
            filter: 'blur(15px)',
            zIndex: -1,
            
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={"https://i.ibb.co/rkcKynm/pexels-steve-johnson-3344073-2nft1.png"}
          />
        </Box>
       
          <Text pt={"30px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            NFT COLLECTION #2535
          </Text>
          <Heading pt={"30px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            MONKEY PUNKS
          </Heading>
         
            <Text pt={"30px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
              $57
            </Text>
           
          
        
      </Box> 





      {/* <SimpleGrid columns={[1, 2, 1, 2]}>
         
            
              <Card
                key={id}
                collection={collection}
                name={name}
                image={image}
                price={price}
              />
              </SimpleGrid> */}


     </Stack>




      
      
     
      </Box>
      
        
      </>
    );
  };
  
  export default Profile;
