import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import * as React from "react";
import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";

const ExplorePage = () => {
  const { provider, walletAddress, balance } = useMetamask();

  return (
    <>
      <Navbar />
      <Flex
        flexDirection={"row"}
        bgColor={"black"}
        height={"100vh"}
        width={"100vw"}
      >
        <Box textAlign={"start"} width={"40%"} height={"100vh"}>
          <Box
            ml={"20px"}
            mt={"30px"}
            width={"80%"}
            height={"fit-content"}
            padding={"20px"}
            bgColor={"#171717"}
            borderRadius={"20px"}
            borderColor={"gray"}
            borderWidth={"1.5px"}
          >
            <Text color={"white"} fontSize={"xl"} fontWeight={"bold"}>
              Your Profile
            </Text>
            <Text mb={"10px"} color={"white"} mt={"10px"}>
              {walletAddress}
            </Text>
            <Divider />
            <Text
              color={"white"}
              mt={"10px"}
              fontWeight={"semibold"}
              fontSize={"20px"}
            >
              Balance : &nbsp; {balance}
            </Text>
          </Box>
        </Box>
        <Box>
        </Box>
      </Flex>
    </>
  );
};

export default ExplorePage;
