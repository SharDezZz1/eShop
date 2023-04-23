import Header from "./header/Header";
import Head from "next/head";

const Layouts = ({ children, ...props }) => {
  return (
    <>
      <Head>
        <title>Create Netxt App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main {...props}>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;