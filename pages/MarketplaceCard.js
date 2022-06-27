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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import { useMetamask } from "./api/components/context/metamsk.context";
import { ABI } from "./constansts/LazyNFT.js";
import { MARKETPLACE_ABI } from "./constansts/MarketplaceABI.js";
import { BRDIGE_ABI } from "./constansts/CrossChainNFTBridge";
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnAEpgv5JuACSfwsB64X-MjaKKApGX9EQZ05sKfJ",
});

function MarketplaceCard({ key, singlenft }) {
  console.log("Marktplace NFT details", singlenft);
  const refId = singlenft.ref.value.id;
  singlenft = singlenft.data.metadata;
  const ethValue = ethers.utils.formatEther(singlenft.listedPrice);
  // const { owner, name, description, collection, uri } = singlenft;

  const { provider, walletAddress, balance, chain } = useMetamask();
  const toast = useToast();
  const [swapTo, setSwapTo] = useState("");
  const [swapFrom, setSwapFrom] = useState("");
  const [buyON, setBuyOn] = useState("97");
  const [tokenIDName, setTokenName] = useState("");
  const [nftON, setNftON] = useState("");
  const [signer, setSigner] = useState(null);
  const [logo, setlogo] = useState("");
  const [contract, setContract] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //const { isOpen, onOpen, onClose } = useDisclosure();
  const [moveTo, setMoveTo] = useState("4");
  const [bridgeContract, setBridgeContract] = useState(null);
  const [nftMarketplaceContract, setNftMarketplace] = useState(null);
  const [chainString, setChainString] = useState("");
  const [nativeCrypto, setNativeCrypto] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const buyHandler = async () => {
    if (chain?.toString() == singlenft.chainId) {
      console.log(
        "Datas",
        singlenft.nftContractAddress,
        singlenft.marketplaceSaleId,
        singlenft.listedPrice
      );
      try {
        const txReceipt = await (
          await nftMarketplaceContract.createMarketSale(
            singlenft.nftContractAddress,
            singlenft.marketplaceSaleId,
            { value: singlenft.listedPrice }
          )
        ).wait();
        console.log("tx", txReceipt.status);
        if (txReceipt.status === 1) {
          const ref = await client.query(
            q.Delete(q.Ref(q.Collection("marketplace_nfts"), refId))
          );
          console.log("Deleted Ref", ref);
          toast({
            title: ` WOOHOO! you bought ${tokenIDName} NFT `,
            variant: "subtle",
            isClosable: true,
          });
        }
      } catch (error) {}
    } else {
      const chainString = "";
      if (singlenft.chainId === "4") {
        chainString = "Rinkbey Tesnet";
      } else if (singlenft.chainId === "97") {
        chainString = "Binance Smart Chain Testnet";
      } else {
        chainString = "Mumbai Testnet";
      }
      alert(`Switch your metamask to ${chainString} to buy this NFT on chain`);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        const signer = provider?.getSigner();
        const tokenNameID = singlenft.name + "#" + singlenft.id;
        setTokenName(tokenNameID);

        if (signer) {
          let marketplace;
          let bridgeContract;
          let nftMarketplace;
          if (chain?.toString() == "4") {
            nftMarketplace = new ethers.Contract(
              "0x90D3e58DbC2D33a05CE07F2092880E5142b05309",
              MARKETPLACE_ABI,
              signer
            );
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
            nftMarketplace = new ethers.Contract(
              "0xf5fdB7284614D94f4b0Ecc207E03689Ec80B9D4C",
              MARKETPLACE_ABI,
              signer
            );
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
            nftMarketplace = new ethers.Contract(
              "0x587aE333EEc2e1FF0EB835CFC5F5579C1250ba1E",
              MARKETPLACE_ABI,
              signer
            );
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
          console.log("NFT Marketplace", nftMarketplace);
          setChainString(chainString);
          setNftMarketplace(nftMarketplace);
          setLoading(false);
          setSigner(signer);
        }
        if (singlenft.chainId === "4") {
          setNftON("ETHEREUM");
          setlogo("https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022");
        } else if (singlenft.chainId === "97") {
          setNftON("BINANCE SMART CHAIN");
          setlogo("https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022");
        } else {
          setNftON("POLYGON");
          setlogo("https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022");
        }
        setSigner(signer);
      }
    };
    fetchData();
  }, [walletAddress, provider]);

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
        <Heading
          pt={"8px"}
          textAlign={"center"}
          fontSize={"2xl"}
          color={"black"}
          fontFamily={"body"}
          fontWeight={500}
        >
          {tokenIDName}
        </Heading>

        <Text
          pt={"10px"}
          textAlign={"center"}
          color={"black.500"}
          textTransform={"uppercase"}
          fontSize={"2xl"}
        >
          {singlenft.description}
        </Text>

        <Text
          pt={"4px"}
          color={"black"}
          textAlign={"center"}
          fontWeight={800}
          fontSize={"xl"}
        >
          {singlenft.price}
        </Text>

        <Center>
          {/* <Select
            placeholder=""
            borderColor={"purple.200"}
            color={"black"}
            bg={"purple.100"}
            fontSize={"xl"}
            fontWeight={"bold"}
            width={"160px"}
            pt={"9%"}
            borderRadius={"10px"}
            // value={swapFrom}
            onChange={(e) => {
              setBuyOn(e.target.value);
            }}
          >
            <option value="4"> ETHEREUM </option>
            <option value="80001"> POLYGON </option>
            <option value="97"> BINANCE SMART CHAIN </option>
          </Select> */}
          <Text
            pt={"4px"}
            color={"black"}
            textAlign={"center"}
            fontWeight={800}
            fontSize={"xl"}
          >
            {nftON}
          </Text>
        </Center>
        <Center>
          <Flex justifyContent={"center"}>
            <Text
              pt={"5px"}
              textAlign={"center"}
              fontWeight={800}
              fontSize={"xl"}
              color={"purple.500"}
            >
              {ethValue}
              {/* {nativeCrypto}  */}
            </Text>
            <Image w={"15px"} ml={"10px"} src={logo} />
          </Flex>
        </Center>

        <Center>
          <Button mt={"5%"} bg={"purple.800"} onClick={buyHandler}>
            {" "}
            <Text color={"white"}> BUY NFT </Text>{" "}
          </Button>
        </Center>
      </Box>
    </Stack>
  );
}

export default MarketplaceCard;
