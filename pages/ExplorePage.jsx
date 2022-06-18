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
import SearchBar from "./Search";
import { Icon } from "@chakra-ui/react";
import Nftdatalist from './Nftdatalist.json'
import Card from "./NftCard";


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
    </>
  );
};

export default ExplorePage;


