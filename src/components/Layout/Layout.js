import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import {} from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <ToastContainer />
      <main style={{ minHeight: "85vh" }}> {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Agrico - Website",
  description: "This is Agrico Website",
  keywords: "Mango,Shooping",
};

export default Layout;
