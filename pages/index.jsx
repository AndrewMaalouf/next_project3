import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Services from "@/components/Services";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header
          img="/abstract.jpg"
          title="Welcome to My Website"
          text="You can check our services and contact us!"
        />
      </main>
      <Footer />
    </>
  );
}
