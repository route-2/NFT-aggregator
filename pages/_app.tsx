import '../styles/globals.css'
import '../pages/grad.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MetaMaskProvider } from './api/components/context/metamsk.context'
import {useRouter} from 'next/router'
import Homepage from './Homepage'
import Navbar from './api/components/Navbar'
import Chain from './Chain'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
const showNavbar = router.pathname === '/' ? false : true;

  return(
    <MetaMaskProvider>
    <ChakraProvider>
      
      <Homepage/>
      <Component {...pageProps} /> 
      <Chain/>
    </ChakraProvider> 
    </MetaMaskProvider>
  )
}

export default MyApp
