import React from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";


  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

const FaqSection = () => {

    const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="relative py-20 overflow-hidden ">
      <img className="absolute top-0 left-0 mt-44" src="saturn-assets/images/faq/light-blue-left.png" alt="" />
      <img className="absolute top-0 right-0 mt-10" src="saturn-assets/images/faq/star-right.svg" alt="" />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">FREQUENTLY ASK QUESTION</span>
            <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
              <span>You ask? We&nbsp;</span>
              <span className="font-serif italic">answer</span>
            </h1>
          </div>
          <div className="flex flex-wrap mx-48 text-left tracking-normal">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>What is the VC Project?</AccordionHeader>
        <AccordionBody>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        What is the procedure for uploading my firm’s report onto this repository?

        </AccordionHeader>
        <AccordionBody >
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        Are all the reports about India covered in this?

        </AccordionHeader>
        <AccordionBody>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>How do you intend to earn from this?
</AccordionHeader>
        <AccordionBody>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>How can I contribute to this project?
</AccordionHeader>
        <AccordionBody>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>How do you choose which reports to upload?
</AccordionHeader>
        <AccordionBody>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        </AccordionBody>
      </Accordion>
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
