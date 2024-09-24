"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SliderFlowers = () => {
  return (
    <div className="bg-[#698269]">
      <div className="flex h-48 items-center justify-center">
        <span className="font-bold uppercase text-black text-3xl">
          Upcoming Project
        </span>
      </div>
      <HorizontalScrollCarousel />
     
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default SliderFlowers;

const cards = [
  {
    url: "https://plus.unsplash.com/premium_photo-1678116084010-1c4f3502c49d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2Vyc3xlbnwwfDB8MHx8fDA%3D",
    title: "The Royal Oak",
    id: 1,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1676400614009-3b230ef8be6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2Vyc3xlbnwwfDB8MHx8fDA%3D",
    title: "The Royal Oak",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1488928741225-2aaf732c96cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHwwfDB8fHww",
    title: "The Royal Oak",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1604400247036-e0b38afce25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZsb3dlcnN8ZW58MHwwfDB8fHww",
    title: "The Royal Oak",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1428353077903-d09b3e000f37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZsb3dlcnN8ZW58MHwwfDB8fHww",
    title: "The Royal Oak",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1507646871303-331b8f659227?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZsb3dlcnN8ZW58MHwwfDB8fHww",
    title: "The Royal Oak",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZsb3dlcnN8ZW58MHwwfDB8fHww",
    title: "The Royal Oak",
    id: 7,
  },
  {
    url: "https://images.unsplash.com/photo-1602953589577-a7e91286f5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VycyUyMGdhcmRlbnxlbnwwfDB8MHx8fDA%3D",
    title: "The Royal Oak",
    id: 8,
  },
];