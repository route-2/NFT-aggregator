import {
  background,
  Box,
  Button,
  Flex,
  Image,
  Img,
  Text,
  Link,
} from "@chakra-ui/react";
import Navbar from "./api/components/Navbar";
import NotConnectedModal from "./api/components/NotConnectedModal";
import { useMetamask } from "./api/components/context/metamsk.context";
import ConnectedModal from "./api/components/ConnectedModal";
import { ButtonGroup } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import ExplorePage from "./ExplorePage";
const Homepage = () => {
  const { isWalletConnected, walletAddress, chain, currentWallet } =
    useMetamask();
  return (
    <>
      {/* <Navbar/> */}

      <Flex
        backgroundImage={
          "https://i.ibb.co/kxq0prc/Mac-Book-Pro-16-1background.jpg"
        }
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
        width={"100vw"}
        height={"100vh"}
        flexDirection={"column"}
      >
        
        <Flex
          width={"100vw"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
          padding={"20px"}
          
        >
          

          <Link href={"/"} pl={"70px"}  pr={"60px"} variant={"unstyled"} colorScheme={"purple"} color={"white"}>
            Home
          </Link>

          <Link href="./ExplorePage" pl={"70px"} pr={"60px"} variant={"unstyled"} colorScheme={"purple"} color={"white"}  >
            Explore
          </Link>

          <Button pl={"70px"} pr={"60px"} variant={"unstyled"} colorScheme={"purple"} color={"white"}>
            Create
          </Button>

          <Box pl={"70px"} pr={"60px"} >
            {isWalletConnected && walletAddress && chain && currentWallet ? (
              <>
                <ConnectedModal />
              </>
            ) : (
              <NotConnectedModal />
            )}
          </Box>
        </Flex>

        <Flex flexDirection={"row"}>
          <Flex width={"50%"} height={"100%"} >
            <Text bgGradient='linear(to-l, purple.800, purple.200)'
                  bgClip='text'
                  fontSize='6xl'
                  fontWeight='extrabold'
                  pl={'100px'}
                  pt={"200px"}
                  position={"absolute"}
                   >
              Buy or Trade your<Text>NFTs</Text>
            </Text>
            <Button mt={'400px'} 
                    bgGradient={[
                      'linear(to-tr, teal.300, yellow.400)',
                      'linear(to-t, blue.200, teal.500)',
                      'linear(to-b, orange.100, purple.800)',
                    ]}    
                    
                    ml={'100px'} > Launch App </Button>
          </Flex>

          <Flex
            flex={"1"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"50%"}
            height={"100vh"}
          >
            <Box  boxShadow='inner' p='6' rounded='md' bgGradient='linear(purple.400,purple.100)' dropShadow={"md"} >
              <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
