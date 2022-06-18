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
} from "@chakra-ui/react";

function Card({key,singlenft}) {

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
   
      <Text pt={"30px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {singlenft.collection}
      </Text>
      <Heading pt={"30px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
       {singlenft.name}
      </Heading>
     
        <Text pt={"30px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
         {singlenft.price}
        </Text>
       
      
    
  </Box> 
  
  </Stack>
  
  );
}

export default Card;
