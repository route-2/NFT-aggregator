import {
  Box,
  Divider,
  Flex,
  Button,
  Image,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import * as React from "react";
import SearchBar from "./Search";
import { Icon } from "@chakra-ui/react";

import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const LazyMarketplace = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
      <SearchBar />
      <Flex
        height={"100%"}
        backgroundSize={"cover"}
        bgGradient="linear(to-br, #1F0942, #000000)"
      >
        <Box flex="1" ml={"100px"} mt={"30px"}>
          <Link>
            <Box
              width={"500px"}
              bg={"whiteAlpha.300"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
              borderRadius={"20px"}
            >
              <Box
                width={"200px"}
                mt={"100px"}
                padding={"20px"}
                borderRadius={"20px"}
                bg={"whiteAlpha.100"}
                backdropFilter={"auto"}
                backdropBlur={"1px"}
              >
                <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
              </Box>
            </Box>
          </Link>
          <Box
            width={"500px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            borderRadius={"20px"}
          >
            <Box
              width={"200px"}
              mt={"20px"}
              padding={"20px"}
              borderRadius={"20px"}
              bg={"whiteAlpha.300"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
            >
              <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
            </Box>
          </Box>
          <Box
            width={"500px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            borderRadius={"20px"}
          >
            <Box
              width={"200px"}
              mt={"20px"}
              padding={"20px"}
              borderRadius={"20px"}
              bg={"whiteAlpha.300"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
            >
              <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
            </Box>
          </Box>
        </Box>
        <Box flex="2" mt={"30px"}>
          <Flex ml={"40%"}>
            <Box
              width={"550px"}
              mt={"100px"}
              mr={"80px"}
              padding={"20px"}
              borderRadius={"20px"}
              bg={"whiteAlpha.300"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
            >
              <Image src="https://s8.gifyu.com/images/WhatsApp-Video-2022-06-09-at-9.06.07-PM9d0aee11c2a7e0d3.gif" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default LazyMarketplace;
