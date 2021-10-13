import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>cookie-stand-api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
