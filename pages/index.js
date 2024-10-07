import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


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

        <Services services={services} servicesTitle={"Our Services"} />
        <Form />

        <div className="container mx-auto my-12">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={2}
            slidesPerView={3}
            navigation
          // pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="w-[300px] h-[300px]">
                <Image
                  src="/img1.jpg"
                  alt="image1"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full no-underline"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[300px] h-[300px]">
                <Image
                  src="/img2.jpg"
                  alt="image2"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full no-underline"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[300px] h-[300px]">
                <Image
                  src="/img3.jpg"
                  alt="image3"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full no-underline"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[300px] h-[300px]">
                <Image
                  src="/img4.jpg"
                  alt="image4"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full no-underline"
                />
              </div>
            </SwiperSlide>

            <style js global>{`
                .swiper-button-next,
                .swiper-button-prev {
                  color: #475569; 
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                  color: #7e57c2; 
                }
            `}</style>

          </Swiper>

        </div>


        <div className="container mx-auto my-12">
          <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${open === 1 ? "hover:text-violet-600" : ""
                }`}
            >
              What We Provide?
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal text-white">
              We provide cutting-edge AI solutions that revolutionize industries, from healthcare to finance. Our advanced algorithms and
              machine learning models enable businesses to make data-driven decisions, optimize operations, and drive innovation.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${open === 2 ? "hover:text-violet-600" : ""
                }`}
            >
              Our Technologies
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal text-white">
            Our cutting-edge technologies harness the power of artificial intelligence and machine learning to revolutionize industries. 
            From natural language processing to computer vision, our innovative solutions drive efficiency, enhance decision-making,
            and unlock new possibilities.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${open === 3 ? "hover:text-violet-600" : ""
                }`}
            >
              Why Choose Us
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal text-white">
            Our team of dedicated experts brings a unique blend of creativity, technical prowess, and industry knowledge to every project.
            We are passionate about delivering innovative solutions that exceed your expectations. With a focus on quality, efficiency,
            and client satisfaction, we are your trusted partner for success.
            </AccordionBody>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  );
}
