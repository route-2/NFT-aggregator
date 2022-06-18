import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Image,
  Text,
  Link,
  Button,
  Stack,
  SimpleGrid,
  useColorModeValue,
  Heading,
  EmailIcon,
  Center,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMetamask } from "./api/components/context/metamsk.context";


function Card({key,singlenft}) {
  const { provider, walletAddress, balance } = useMetamask();
  const [swapTo,setSwapTo] = useState('');
  const [swapFrom,setSwapFrom] = useState('');

  return (
    <Stack>
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
        backgroundImage: singlenft.image,
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
        src={singlenft.image}
      />
    </Box>
   
      <Text pt={"10px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {singlenft.collection}
      </Text>
      <Heading pt={"5px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
       {singlenft.name}
      </Heading>
     
        <Text pt={"5px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
         {singlenft.price}
        </Text>
        <Center> 
        <Button mt={'8px'} color='blackAlpha.700' colorScheme='gray' variant='solid'> 
        
        BUY NOW
        
        </Button>
        </Center>
        <Flex color={'black'} >
              <Select
                placeholder=""
                borderColor={"purple.200"}
                color={"black"}
                bg={"purple.100"}
                fontSize={"xl"}
                fontWeight={"bold"}
                width={"150px"}
                
                pt={"9%"}
                borderRadius={"10px"}
                value={swapFrom}
                onChange={(e) => {
                  setSwapFrom(e.target.value)
                }}
              >
                <option value="ETH"> ETH </option>
                <option value="MATIC"> MATIC </option>
                <option value="BNP"> BNB </option>
              </Select>
              <Box>
                <Image
                  width={"30px"}
                  mt={"40px"}
                  p={'1'}
                  src={
                    "https://i.ibb.co/HBSPkHZ/icons8-refresh-50.png"
                  }
                />
              </Box>
              <Select
                placeholder=""
                borderColor={"purple.200"}
                color={"black"}
                fontSize={"xl"}
                fontWeight={"bold"}
                width={"150px"}
               
                pt={"9%"}
                bg={"purple.100"}
                borderRadius={"10px"}
                value={swapTo}
                onChange={(e) => {
                  setSwapTo(e.target.value)
                }}
              >
                <option value="ETH"> ETH </option>
                <option value="MATIC"> MATIC </option>
                <option value="BNP"> BNB </option>
              </Select>
              
            </Flex>

            <Center> 
              <Button
               
                mt={"5%"}
                bg={'purple.800'}
              >
                {" "}
                <Text color={'white'}> SWAP </Text>{" "}
              </Button>
              </Center>
      
    
  </Box> 
  
  </Stack>
  
  );
}

export default Card;
