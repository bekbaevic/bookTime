import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function Home({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Home;
