import {
  Box,
  Divider,
  Flex,
  Button,
  Image,
  Input,
  Text,
  Link,
  useColorModeValue,
  Heading,

} from "@chakra-ui/react";
import * as React from "react";
import Card from "./NftCard";
import SearchBar from "./Search";
import { Icon } from "@chakra-ui/react";
import Nftdatalist from './Nftdatalist.json'


import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const ExplorePage = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
      <SearchBar />
      <Flex
        height={"150vh"}
        backgroundSize={"cover"}
        bgGradient="linear(to-br, #1F0942, #000000)"
        justifyContent={'space-between'}
        
      
      >
        
        <Flex mt={'10%'} ml={'10%'} flexDirection={'row'}  justifyContent={'center'}  > 
        
        <Flex flexDirection={'row'} width={"100vw"} > 
        <Link href="./Bid"> 
            
        {Nftdatalist.map(({id, name, collection,image,price}) => {
        return (
          <>
          <Flex flexDirection={"row"} width={"100vw"}> 
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
        backgroundImage: {image},
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
        src={image}
      />
    </Box>
   
      <Text pt={"30px"} textAlign={'center'} color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
        NFT COLLECTION {collection}
      </Text>
      <Heading pt={"30px"} textAlign={'center'} fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
       {name}
      </Heading>
     
        <Text pt={"30px"} textAlign={'center'} fontWeight={800} fontSize={'xl'}>
         {price}
        </Text>
        
       
      
    
  </Box> 
  </Flex>
  





          </>
        );
      })}

        
       
        </Link>
        </Flex>
        
        
       

        </Flex>
        
      </Flex>
    </>
  );
};

export default ExplorePage;
