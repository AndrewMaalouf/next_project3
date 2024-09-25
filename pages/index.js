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
  const services = [
    {
      imageSrc: "/card1.jpg",
      title: "Service 1",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
      imageSrc: "/card2.jpg",
      title: "Service 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      imageSrc: "/card3.jpg",
      title: "Service 3",
      description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
    },
  ];
  return (
    <>

      <Navbar />
      <main>
        <Header
          img="/abstract.jpg"
          title="Welcome to My Website"
          text="You can check our services and contact us!"
        />
        <Services services={services}
          servicesTitle={"Our Services"}
        />
        <Form />


      </main>
      <Footer />
    </>
  );
}
