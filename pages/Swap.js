import React, { useEffect, useState } from 'react'
import {
  Heading,
  Menu,
  MenuButton,
  Container,
  Stack,
  Input,
  ChevronDownIcon,
  MenuList,
  MenuItem,
  centerContent,
  Center,
  Select,
  Text,
  Flex,
  Link,
  Code,
  Box,
  Button,
} from '@chakra-ui/react'
import Objects from './Objects'
import Header from '../Header'
import { useWeb3 } from './context/web3Context'
import NetworkDropdown from './NetworkDropdown'

function Swaps() {
  const web3Context = useWeb3()

  const setSwapFrom = web3Context.setSwapFrom
  const setSwapTo = web3Context.setSwapTo
  const swapFrom = web3Context.swapFrom
  const swapTo = web3Context.swapTo
  const TokenVal = web3Context.selectedTokenAmount
  const approved = web3Context.approved
  const deposited = web3Context.deposited

  // const [amount, setAmount] = useState(null)
  const [totoken, setToToken] = useState('Select Token')
  return (
    <>
      <Header />
      <Flex
        bgGradient='linear(gray.400 0%, gray.200 30%, gray.100 50%)'
        w='100%'
        h={'100%'}
        textAlign={'center'}
      >
        <Flex padding={'20px'}></Flex>
        <Container maxW='2xl' centerContent>
          <Flex>
            <Box
              borderRadius={'40px'}
              blur={'6xl'}
              padding={'40px'}
              flexDirection={'row'}
              alignSelf={'center'}
              width={'55%'}
              bgColor={'whiteAlpha.400'}
              mt={'8vh'}
              ml={'200px'}
              height={'95%'}
              boxShadow={'2xl'}
            >
              <Flex flexDirection={'row'}>
                <Text
                  bgGradient='linear(to-l, #009ffd, #2a2a72)'
                  bgClip='text'
                  fontSize='5xl'
                  fontWeight='extrabold'
                >
                  SWAP
                </Text>
              </Flex>
              <Flex>
                <Box
                  flex
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  ml={"5px"}
                  width={"60vw"}
                  padding={"40px"}
                  mt={"70px"}
                 
                  borderRadius={"38px"}
                  bgColor={"white"}
                  boxShadow={'xl'}
                 
                >
                  <Flex>
                    <Flex flexDirection={'column'}>
                      {/* <label>Select Token</label> */}
                      <Flex >
                        <Objects from={true}/>
                      </Flex>
                    </Flex>
                    <Box>
                      <Select
                        placeholder='Select a Token'
                        borderColor={'white'}
                        color={'black'}
                        _hover={'none'}
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        width={'100%'}
                        alignItems={'flex-start'}
                        alignContent={'flex-start'}
                        ml={'30%'}
                        borderRadius={'22px'}
                        value={swapFrom}
                        onChange={(e) => {
                          setSwapFrom(e.target.value)
                        }}
                      >
                        <option value='ETH'> ETH </option>
                        <option value='MATIC'> MATIC </option>
                        <option value='BNP'> BNB </option>
                        <option value='CRX'>CrossX</option>
                      </Select>
                    </Box>
                  </Flex>
                  <Box>
                    <Text fontSize={"xl"} fontWeight={'bold'} textAlign={"start"} ml={'13px'} mt={'10%'} mb={'5%'}>
                      Token Balance: {web3Context.selectedTokenAmount}
                    </Text>
                  </Box>
                  <Box>
                    <Stack spacing={3}>
                      <Input
                        placeholder='$0.0'
                        onChange={(e) => web3Context.setAmount(e.target.value)}
                        borderColor={'gray'}
                        borderWidth={'3px'}
                        fontWeight={'bold'}
                        size='lg'
                      />
                      {/* <Text>{amount}</Text> */}
                    </Stack>
                  </Box>
                </Box>
              </Flex>
              <Flex>
                <Box
                  flex
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  ml={"5px"}
                  width={"60vw"}
                  padding={"40px"}
                  mt={"70px"}
                  borderRadius={"38px"}
                  bgColor={"white"}
                  boxShadow={'xl'}

                  
                >
                  <Flex>
                    <Flex flexDirection={'column'}>
                      {/* <label>Select Token</label> */}
                      <Flex>
                        <Objects from={false} />
                      </Flex>
                    </Flex>
                    <Box>
                      <Select
                        placeholder='Select a Token'
                        borderColor={'white'}
                        color={'black'}
                        _hover={'none'}
                        fontSize={'xl'}
                        fontWeight={'bold'}
                        width={'100%'}
                        alignItems={'flex-start'}
                        alignContent={'flex-start'}
                        ml={'30%'}
                        borderRadius={'22px'}
                        value={swapTo}
                        onChange={(e) => {
                          setSwapTo(e.target.value)
                        }}
                      >
                        <option value='ETH'> ETH </option>
                        <option value='MATIC'> MATIC </option>
                        <option value='BNP'> BNB </option>
                        <option value='CRX'>CrossX</option>
                      </Select>
                    </Box>
                  </Flex>
                  
                   
                 
                </Box>
              </Flex>
              <Box
                alignItems={'center'}
                justifyContent={'center'}
                alignContent={'center'}
                mt={'5'}
              >
                {approved === null && deposited === null ? (
                  <Button
                    variant={'solid'}
                    onClick={web3Context.depositAsset}
                    colorScheme={'twitter'}
                  >
                    Confirm Swap
                  </Button>
                ) : (
                  <Button variant={'solid'} colorScheme={'twitter'}>
                    {approved === null ? null : approved === false ? (
                      <h1>Approving...</h1>
                    ) : (
                      <h1>Approved</h1>
                    )}
                    {deposited === null ? null : deposited === false ? (
                      <h1>Depositing...</h1>
                    ) : (
                      <h1>Deposited</h1>
                    )}
                  </Button>
                )}
              </Box>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}
export default Swaps
