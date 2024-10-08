// import React from "react";
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";

// import {AccordionProvider} from "@material-tailwind/react";



// const AccordionComponent = () => {
//     const [open, setOpen] = React.useState(1);

//     const handleOpen = (value) => setOpen(open === value ? 0 : value);

//     return (
//         <AccordionProvider>
//             <div className="container mx-auto my-12">
//                 <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
//                     <AccordionHeader
//                         onClick={() => handleOpen(1)}
//                         className={`border-b-0 transition-colors ${open === 1 ? "hover:text-violet-600" : ""
//                             }`}
//                     >
//                         What We Provide?
//                     </AccordionHeader>
//                     <AccordionBody className="pt-0 text-base font-normal text-white">
//                         We provide cutting-edge AI solutions that revolutionize industries, from healthcare to finance. Our advanced algorithms and
//                         machine learning models enable businesses to make data-driven decisions, optimize operations, and drive innovation.
//                     </AccordionBody>
//                 </Accordion>
//                 <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
//                     <AccordionHeader
//                         onClick={() => handleOpen(2)}
//                         className={`border-b-0 transition-colors ${open === 2 ? "hover:text-violet-600" : ""
//                             }`}
//                     >
//                         Our Technologies
//                     </AccordionHeader>
//                     <AccordionBody className="pt-0 text-base font-normal text-white">
//                         Our cutting-edge technologies harness the power of artificial intelligence and machine learning to revolutionize industries.
//                         From natural language processing to computer vision, our innovative solutions drive efficiency, enhance decision-making,
//                         and unlock new possibilities.
//                     </AccordionBody>
//                 </Accordion>
//                 <Accordion open={open === 3} className="rounded-lg border border-blue-gray-100 px-4 bg-slate-400">
//                     <AccordionHeader
//                         onClick={() => handleOpen(3)}
//                         className={`border-b-0 transition-colors ${open === 3 ? "hover:text-violet-600" : ""
//                             }`}
//                     >
//                         Why Choose Us
//                     </AccordionHeader>
//                     <AccordionBody className="pt-0 text-base font-normal text-white">
//                         Our team of dedicated experts brings a unique blend of creativity, technical prowess, and industry knowledge to every project.
//                         We are passionate about delivering innovative solutions that exceed your expectations. With a focus on quality, efficiency,
//                         and client satisfaction, we are your trusted partner for success.
//                     </AccordionBody>
//                 </Accordion>
//             </div>
//         </AccordionProvider>
//     )
// }

// export default AccordionComponent