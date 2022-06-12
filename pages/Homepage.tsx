import { Box, Button, Flex,Image, Img, Text } from '@chakra-ui/react';
import Navbar from './api/components/Navbar';
import NotConnectedModal from './api/components/NotConnectedModal';
import { useMetamask } from './api/components/context/metamsk.context';
import ConnectedModal from './api/components/ConnectedModal';
import {  ButtonGroup } from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners';
const Homepage =()=>{
    const {
        isWalletConnected,
        walletAddress,
        chain,
        currentWallet,
      } = useMetamask()
    return(
        <>

  
  {/* <Navbar/> */}
  
          
       
        <Flex bgGradient='linear(to-br, #0A0081, #000000)' > 
        {/* <Flex w={'20px'} bgGradient='radial( yellow.400, pink.200)' > 
   
      
      
   </Flex> */}

        
      
       
        
            <Box width={"70%"} pl={'7%'} pt={"15%"} alignItems={"center"} justifyContent={"center"} height={"100vh"}  >
           <Box alignContent={"flex-start"}> 
           
            <Text fontSize={"70px"} fontWeight={"bold"}  color={"white"}  textAlign={"start"}> Buy or trade your     
            <Text  bgGradient={[
    'linear(to-tr, teal.500, yellow.400)',
    'linear(to-t, blue.500, teal.500)',
    'linear(to-b, orange.100, purple.600)',
  ]}
         bgClip='text'
         fontSize='6xl'
          fontWeight='extrabold'> NFTs </Text>
            
            </Text> 
           
      </Box>
                <Text fontSize={"2xl"} color={"white"} pb={"30px"}>To the social media of  NFT  creators</Text>
                <Button 
                bgGradient={[
                  'linear(to-tr, teal.300, yellow.400)',
                  'linear(to-t, blue.200, teal.500)',
                  'linear(to-b, orange.100, purple.800)',
                ]}    
                
                
                
                >
  {/* // isLoading
  // colorScheme='blue'
  // spinner={<BeatLoader size={8} color='white' />
> */}
  Launch App
</Button>
            </Box>
            {/* <Box justifyContent={"center"} pt={"15%"} alignItems={"center"} textAlign={'start'} flex={"1"} height={"100vh"} bgGradient='linear(to-bl, #0A0081, #000000)'>
               
            </Box> */}
            <Flex pl={"200px"} > 
        <ButtonGroup pt={'20px'} pr={"20px"}  >
                <a href='../../Homepage' ><Button variant={"ghost"} fontSize={"xl"} textColor={"white"} colorScheme={"whiteAlpha"}>Home</Button></a>
                <a href='../../ExplorePage' ><Button variant={"ghost"} fontSize={"xl"} textColor={"white"} colorScheme={"whiteAlpha"}>Explore</Button></a>
                <Button variant={"ghost"} colorScheme={"whiteAlpha"} fontSize={"xl"} textColor={"white"} > Create</Button>
            </ButtonGroup> 
            <Box pt={"20px"} pl={"20px"}> 
            {isWalletConnected && walletAddress && chain && currentWallet ?(<><ConnectedModal/></>):<NotConnectedModal/>}
            <Image rounded={"2xl"} pt={'40%'} pr={"60%"} w={"1000px"} src='https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif'/>
            </Box>
            {/* <Box boxSize='sm'>
  <Image className='grad' src='https://i.ibb.co/S6Tz01f/Group-1gradient.png'  />
</Box> */}



            </Flex>
           
        </Flex>
      
       
        </>
    )
}

export default Homepage