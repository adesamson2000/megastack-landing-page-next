// import Head from "next/head";
// import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Process from "../components/Process";
import Product from "../components/Product";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NavBar active={"Home"} />
      <Header />
      <Process />
      <Product />
      <Footer />
    </>
  );
}
