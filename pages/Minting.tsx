import {
  Box,
  Divider,
  Select,
  Flex,
  Button,
  Image,
  Input,
  Text,
  Spacer,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import * as React from "react";
import { ReactNode, useRef } from "react";
import SearchBar from "./Search";
import { RiSwapLine } from "react-icons/ri";
import { useState } from "react";
import { FiFile } from "react-icons/fi";
import { Row, Form, Spinner } from "react-bootstrap";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { create as ipfsHttpClient } from "ipfs-http-client";

import { LazyMinter } from "./CreateVoucher.js";
import { ABI } from "./LazyNFT.js";
import { useMetamask } from "./api/components/context/metamsk.context";
import Navbar from "./api/components/Navbar";
import { ethers } from "ethers";
const faunadb = require("faunadb");

const q = faunadb.query;
const fclient = new faunadb.Client({
  secret: "fnAEpgv5JuACSfwsB64X-MjaKKApGX9EQZ05sKfJ",
});
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Mint = () => {
  const { provider, chain, walletAddress, balance } = useMetamask();

  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [id, setid] = useState(0);
  const [rt, setRt] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [collection, setCollection] = useState("");
  const [voucher, setVoucher] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [redirect, setredirect] = useState(false);
  const [listed, setListed] = useState(true);
  const [sa, setSa] = useState("");
  const [contract, setContract] = useState(undefined);
  const [signer, setSigner] = useState(null);

  const setNameHandler = (event: { target: { value: any } }) =>
    setName(event.target.value);

  const setDescriptionHandler = (event: { target: { value: any } }) =>
    setDescription(event.target.value);

  const setPriceHandler = (event: { target: { value: any } }) =>
    setPrice(event.target.value);

  const setCollectionHandler = (event: { target: { value: any } }) =>
    setCollection(event.target.value);

  const uploadToIPFS = async (event: any) => {
    event.preventDefault();
    if (walletAddress) {
      setSa(walletAddress);
    }

    const file = event.target.files[0];
    if (typeof file !== "undefined" && walletAddress !== null) {
      try {
        console.log(file);
        const result = await client.add(file);
        console.log(result);
        setImage(`https://ipfs.infura.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
  };
  const submitFormHandler = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    await createNFT();
  };
  const createNFT = async () => {
    if (!image || !price || !name || !description) {
      return;
    }
    setLoading(true);
    const rt = ethers.utils.parseEther(price).toString();
    setRt(rt);
    try {
      const id = Number(await contract.getTotalMinted()) + 1;
      const result = await client.add(
        JSON.stringify({ image, rt, id, name, description })
      );
      const uri = `https://ipfs.infura.io/ipfs/${result.path}`;
      console.log(uri);

      console.log(contract?.address);

      const lazyminter = new LazyMinter({ contract, signer });
      const voucher = await lazyminter.createVoucher(
        id,
        uri,
        rt,
        name,
        description
      );
      setVoucher(voucher);
      var metadata = voucher as any;
      metadata.owner = walletAddress;
      metadata.chainId = chain?.toString();
      metadata.image = image;
      metadata.collection = collection;
      try {
        console.log(chain?.toString());
        const data = await fclient.query(
          q.Create(q.Collection("lazy_mint_nft_signatures"), {
            data: {
              metadata,
            },
          })
        );
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
      let timer1 = setTimeout(() => setredirect(true), 4000);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
      setLoading(false);
    }
  };
  const [mintAddr, setMintAddr] = useState("");
  const [tokenAddr, setTokenAddr] = useState("");
  const [ownerAddr, setOwnerAddr] = useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      if (walletAddress) {
        const signer = provider?.getSigner();
        console.log(signer);
        if (signer) {
          let marketplace;
          if (chain?.toString() == "4") {
            marketplace = new ethers.Contract(
              "0xe466f8671fcff36a910fa75fa0713b3172df359b",
              ABI,
              signer
            );
          } else if (chain?.toString() == "97") {
            marketplace = new ethers.Contract(
              "0x6cd7fE9D0f79845981A4C138E52c4ff3Ae011616",
              ABI,
              signer
            );
          } else {
            marketplace = new ethers.Contract(
              "0x85f01C6D86fa1aBe4b0E55BC9e43396EE1cfbb01",
              ABI,
              signer
            );
          }

          console.log(marketplace);
          console.log(marketplace.address);
          setContract(marketplace);
          setLoading(false);
        }
        // const allRefs = await fclient.query(
        //   q.Map(
        //     q.Paginate(q.Documents(q.Collection("lazy_mint_nft_signatures"))),
        //     q.Lambda((x: any) => q.Get(x))
        //   )
        // );
        // console.log("allRefs--", allRefs.data);
        // setid(allRefs.data.length + 27);
        setSigner(signer);
      }
    };
    fetchData();
  }, [walletAddress, provider]);

  return (
    <>
      <>
        <SearchBar />
        <Flex
          height={"150vh"}
          backgroundSize={"cover"}
          bgGradient="linear(to-br, #1F0942, #000000)"
          wrap={"wrap"}
        >
          <Flex width={"100%"} textAlign={"center"}>
            <Box
              width={"50%"}
              mt={"10%"}
              height={"390px"}
              ml={"15%"}
              padding={"20px"}
              borderRadius={"20px"}
              bg={"whiteAlpha.300"}
              backdropFilter={"auto"}
              backdropBlur={"2px"}
            >
              <form onSubmit={submitFormHandler}>
                <FormControl isRequired>
                  <FormLabel htmlFor="first-name">Name :</FormLabel>
                  <Input
                    id="first-name"
                    placeholder="Name of your NFT ....."
                    size="sm"
                    onChange={setNameHandler}
                  />
                  <FormLabel htmlFor="first-name">Collection :</FormLabel>
                  <Input
                    id="first-name"
                    placeholder="Name of your Collection ....."
                    size="sm"
                    onChange={setCollectionHandler}
                  />
                  <FormLabel htmlFor="first-name">Description :</FormLabel>
                  <Input
                    id="first-name"
                    placeholder="Description of your NFT ....."
                    size="sm"
                    onChange={setDescriptionHandler}
                  />
                  <FormLabel htmlFor="first-name">Price :</FormLabel>
                  <Input
                    id="first-name"
                    placeholder="Price at which you want to sell your NFT ....."
                    size="sm"
                    onChange={setPriceHandler}
                  />
                  <FormLabel>{"File input"}</FormLabel>

                  <Form.Control
                    type="file"
                    required
                    name="file"
                    onChange={uploadToIPFS}
                  />
                </FormControl>

                <button>Submit</button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </>
    </>
  );
};

export default Mint;
