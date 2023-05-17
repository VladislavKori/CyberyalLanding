import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta
          name="facebook-domain-verification"
          content="lwsitoiny62r21xd2nyb8sf6s08et5"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
