import {
  Box,
  Divider,
  Select,
  Flex,
  Button,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import SearchBar from "./Search";
import { RiSwapLine } from "react-icons/ri";


import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const Chain = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
      <SearchBar />
      <Flex
        height={"100vh"}
        backgroundSize={"cover"}
        bgGradient="linear(to-br, #1F0942, #000000)"
      >
        <Box flex="1" ml={"100px"} mt={"30px"}>
          <Box
            width={"500px"}
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

          <Box
            width={"500px"}
            mt={"40px"}
            height={"90px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            borderRadius={"20px"}
          >
            <Text
              fontSize={"2xl"}
              color={"white"}
              textAlign={"center"}
              pt={"20px"}
            >
              {" "}
              Collection #2111{" "}
            </Text>
          </Box>
        </Box>
        <Box flex="2" mt={"30px"}>
          <Box
            width={"500px"}
            mt={"100px"}
            height={"190px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            ml={"40%"}
            borderRadius={"20px"}
          >
            <Text
              fontSize={"2xl"}
              color={"white"}
              textAlign={"center"}
              pt={"20px"}
            >
              {" "}
              About NFTs{" "}
            </Text>
          </Box>
          <Box
            width={"500px"}
            mt={"100px"}
            height={"340px"}
            bg={"whiteAlpha.300"}
            backdropFilter={"auto"}
            backdropBlur={"2px"}
            ml={"40%"}
            borderRadius={"20px"}
          >
            <Box>
              <Select
                placeholder=""
                borderColor={"white"}
                color={"black"}
                bg={"white"}
                fontSize={"xl"}
                fontWeight={"bold"}
                width={"150px"}
                ml={"35%"}
                pt={"9%"}
                borderRadius={"10px"}
                // value={swapTo}
                // onChange={(e) => {
                //   setSwapTo(e.target.value)
                // }
              >
                <option value="ETH"> ETH </option>
                <option value="MATIC"> MATIC </option>
                <option value="BNP"> BNB </option>
              </Select>
              <Box>
                <Image
                  width={"30px"}
                  mt={"40px"}
                  ml={"45%"}
                  src={
                    "https://i.ibb.co/5nkZB3V/Pngtree-reload-icon-in-trendy-style-4823782.png"
                  }
                />
              </Box>
              <Select
                placeholder=""
                borderColor={"white"}
                color={"black"}
                fontSize={"xl"}
                fontWeight={"bold"}
                width={"150px"}
                ml={"35%"}
                pt={"9%"}
                bg={"white"}
                borderRadius={"10px"}
                // value={swapTo}
                // onChange={(e) => {
                //   setSwapTo(e.target.value)
                // }
              >
                <option value="ETH"> ETH </option>
                <option value="MATIC"> MATIC </option>
                <option value="BNP"> BNB </option>
              </Select>
              <Button
                ml={"45%"}
                mt={"5%"}
                bgGradient="linear(to-l, purple.800, purple.200)"
              >
                {" "}
                <Text> SWAP </Text>{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Chain;
