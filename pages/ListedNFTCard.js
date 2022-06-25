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
} from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import { useMetamask } from "./api/components/context/metamsk.context";
import { ABI } from "./LazyNFT.js";
const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: "fnAEpgv5JuACSfwsB64X-MjaKKApGX9EQZ05sKfJ",
});

function ListedNFTCard({ key, singlenft }) {
  console.log("Listed NFT details", singlenft);
  //   const refId = singlenft.ref.value.id;
  //   singlenft = singlenft.data.metadata;
  // const { owner, name, description, collection, uri } = singlenft;

  const { provider, walletAddress, balance } = useMetamask();
  const [swapTo, setSwapTo] = useState("");
  const [swapFrom, setSwapFrom] = useState("");
  const [buyON, setBuyOn] = useState("4");
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const buyHandler = async () => {
    console.log("Buy...", contract);
    if (walletAddress === singlenft.owner) {
      alert("You cant buy your own nft");
    } else {
      const txReceipt = await (
        await contract.redeem(
          singlenft.owner,
          singlenft.tokenId,
          singlenft.minPrice.toString(),
          singlenft.uri,
          singlenft.name,
          singlenft.description,
          singlenft.signature,
          { value: singlenft.minPrice }
        )
      ).wait();
      console.log("tx", txReceipt.status);
      if (txReceipt.status === 1) {
        const ref = await client.query(
          q.Delete(q.Ref(q.Collection("lazy_mint_nft_signatures"), refId))
        );
        console.log("Deleted Ref", ref);
      }
      // let timer1 = setTimeout(() => loadMarketplaceItems(), 2000);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        const signer = provider?.getSigner();

        if (signer) {
          const marketplace = new ethers.Contract(
            "0x3EF309E793619FfA816D455771B374A552882D7b",
            ABI,
            signer
          );
          setContract(marketplace);
          setLoading(false);
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

        <Text
          pt={"10px"}
          textAlign={"center"}
          color={"gray.500"}
          fontSize={"sm"}
          textTransform={"uppercase"}
        >
          {singlenft.collection}
        </Text>
        <Heading
          pt={"5px"}
          textAlign={"center"}
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight={500}
        >
          {singlenft.name}
        </Heading>

        <Text pt={"5px"} textAlign={"center"} fontWeight={800} fontSize={"xl"}>
          {singlenft.price}
        </Text>

        <Center>
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
              setBuyOn(e.target.value);
            }}
          >
            <option value="4"> ETH </option>
            <option value="80001"> MATIC </option>
            <option value="97"> BNB </option>
          </Select>
        </Center>

        <Center>
          <Button mt={"5%"} bg={"purple.800"} onClick={buyHandler}>
            {" "}
            <Text color={"white"}> CANCEL LISTING</Text>{" "}
          </Button>
        </Center>
      </Box>
    </Stack>
  );
}

export default ListedNFTCard;
