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
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import { useMetamask } from "./api/components/context/metamsk.context";
import { ABI } from "./LazyNFT.js";
import { BRDIGE_ABI } from "./CrossChainNFTBridge.js";
import { LazyMinter } from "./CreateVoucher.js";
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnAEpgv5JuACSfwsB64X-MjaKKApGX9EQZ05sKfJ",
});

function ItemNFTCard({ key, singlenft }) {
  console.log("ITEM NFT details", singlenft);
  const ethValue = ethers.utils.formatEther(singlenft.rt);
  //   const refId = singlenft.ref.value.id;
  //   singlenft = singlenft.data.metadata;
  // const { owner, name, description, collection, uri } = singlenft;

  let ETHttpProvider = new ethers.providers.JsonRpcProvider(
    "https://rinkeby.infura.io/v3/e63e2bf7da29499c99a7560a7a4441b7"
  );
  let PolygonProvider = new ethers.providers.JsonRpcProvider(
    "https://speedy-nodes-nyc.moralis.io/694753c7969c59c42f2dea1b/polygon/mumbai"
  );
  let BSCttpProvider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545"
  );
  const ETHbridgeContract = new ethers.Contract(
    "0x3829a4a816C8be668162EE2EdE7495c7c91ed681",
    BRDIGE_ABI,
    ETHttpProvider
  );
  const BSCbridgeContract = new ethers.Contract(
    "0x0182DEC919C1fd865D19ECBef271B73829123E5C",
    BRDIGE_ABI,
    BSCttpProvider
  );
  const POLYbridgeContract = new ethers.Contract(
    "0xf3994f679ce5636f791De88e7d1f96417395C887",
    BRDIGE_ABI,
    PolygonProvider
  );
  const { provider, walletAddress, balance, chain } = useMetamask();
  const [swapTo, setSwapTo] = useState("");
  const [swapFrom, setSwapFrom] = useState("");
  const [buyON, setBuyOn] = useState("4");
  const [moveTo, setMoveTo] = useState("4");
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [bridgeContract, setBridgeContract] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [chainString, setChainString] = useState("");
  const [nativeCrypto, setNativeCrypto] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const moveHandler = async () => {
    if (walletAddress) {
      console.log("Chain", chain.toString());
      console.log("NFT Contract Address", singlenft.nftContractAddress);
      console.log("Move to chain", moveTo);
      console.log("Token ID", singlenft.id);

      if (chain?.toString() === singlenft.chainId) {
        const txReceipt = await (
          await bridgeContract.deposit(
            singlenft.nftContractAddress,
            "1",
            moveTo,
            singlenft.id
          )
        ).wait();
        console.log("tx", txReceipt.status);
        if (txReceipt.status === 1) {
        }
      } else {
        alert(
          `Please switch your metamask network to ${chainString} to Cross Chain this NFT`
        );
      }
    } else {
      alert(
        `Please connect your metamask wallet to ${chainString} to Cross Chain this NFT`
      );
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        const signer = provider?.getSigner();
        console.log(walletAddress, chain.toString());
        let marketplace;
        let bridgeContract;
        if (chain?.toString() == "4") {
          marketplace = new ethers.Contract(
            "0xe466f8671fcff36a910fa75fa0713b3172df359b",
            ABI,
            signer
          );
          bridgeContract = new ethers.Contract(
            "0x3829a4a816C8be668162EE2EdE7495c7c91ed681",
            BRDIGE_ABI,
            signer
          );
        } else if (chain?.toString() == "97") {
          marketplace = new ethers.Contract(
            "0x6cd7fE9D0f79845981A4C138E52c4ff3Ae011616",
            ABI,
            signer
          );
          bridgeContract = new ethers.Contract(
            "0x0182DEC919C1fd865D19ECBef271B73829123E5C",
            BRDIGE_ABI,
            signer
          );
        } else {
          marketplace = new ethers.Contract(
            "0x85f01C6D86fa1aBe4b0E55BC9e43396EE1cfbb01",
            ABI,
            signer
          );
          bridgeContract = new ethers.Contract(
            "0xf3994f679ce5636f791De88e7d1f96417395C887",
            BRDIGE_ABI,
            signer
          );
        }

        if (singlenft.chainId === "4") {
          chainString = "Rinkbey Testnet";
          setNativeCrypto("ETH");
        } else if (singlenft.chainId === "97") {
          chainString = "Binance Smart Chain Testnet";
          setNativeCrypto("BNB");
        } else {
          chainString = "Mumbai Polygon Testnet";
          setNativeCrypto("MATIC");
        }
        setChainString(chainString);
        console.log("Bridge Contract", bridgeContract);
        console.log(bridgeContract.address);
        setContract(marketplace);
        setBridgeContract(bridgeContract);
        setLoading(false);
        setSigner(signer);
      }
    };
    fetchData();
  }, [walletAddress, provider, chain]);

  React.useEffect(() => {
    const ETHListener = (tokenID, sender, tokenAddress) => {
      console.log("ETH WITHDRAW", tokenID.toString(), sender, tokenAddress);
    };

    const BSCListener = (tokenID, sender, tokenAddress) => {
      console.log("BSC WITHDRAW", tokenID.toString(), sender, tokenAddress);
    };

    const POLYListener = (tokenID, sender, tokenAddress) => {
      console.log("POLY WITHDRAW", tokenID.toString(), sender, tokenAddress);
    };
    // adding listeners everytime props.x changes
    ETHbridgeContract.on("WITHDRAW", ETHListener);
    BSCbridgeContract.on("WITHDRAW", BSCListener);
    POLYbridgeContract.on("WITHDRAW", POLYListener);
    return () => {
      ETHbridgeContract.removeAllListeners("WITHDRAW");
      BSCbridgeContract.removeAllListeners("WITHDRAW");
      POLYbridgeContract.removeAllListeners("WITHDRAW");
    };
  }, []);

  return (
    <Stack>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-10}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: singlenft.image,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={singlenft.image}
          />
        </Box>

        <Text
          pt={"10px"}
          textAlign={"center"}
          color={"purple.500"}
          fontSize={"sm"}
          textTransform={"uppercase"}
        >
          {singlenft.collection}
        </Text>
        <Heading
          pt={"5px"}
          textAlign={"center"}
          fontSize={"2xl"}
          color={"purple.500"}
          fontFamily={"body"}
          fontWeight={500}
        >
          {singlenft.name}
        </Heading>

        <Text
          pt={"5px"}
          textAlign={"center"}
          fontWeight={800}
          fontSize={"xl"}
          color={"purple.500"}
        >
          {ethValue} {nativeCrypto}
        </Text>

        <Center>
          <Button mt={'6'} mr={"5"} bg={"purple.800"} onClick={moveHandler}>
            {" "}
            <Text color={"white"}> Cross chain NFT to </Text>{" "}
          </Button>
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
            // value={swapFrom}
            onChange={(e) => {
              setMoveTo(e.target.value);
            }}
          >
            <option value="4"> ETH </option>
            <option value="80001"> POLYGON </option>
            <option value="97"> BSC </option>
          </Select>
        </Center>
        <Center>
          <Button mt={"5%"} bg={"purple.800"}>
            {" "}
            <Text color={"white"}> Convert to Liquid NFT </Text>{" "}
          </Button>
        </Center>
        <Center>
          <Button mr={'5'} width={'150px'} mt={"4"} bg={"purple.800"}>
            {" "}
            <Text color={"white"} > List for Sale </Text>{" "}
          </Button>
          <Input
            id="first-name"
            placeholder="Price of the NFT"
            color={"black"}
            mt={'4'}
            onChange={(e) => setSalePrice(e.target.value)}
          />
        </Center>
      </Box>
    </Stack>
  );
}

export default ItemNFTCard;
