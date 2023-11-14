import React, { useState, useEffect } from "react";
import Card from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { Flex } from "@chakra-ui/react"

const titles = [
  "Driepoot standbeeld",

  "Ouglas Loungeset",

  "Eiken boomschijf bijzettafel",

  "Z-frame bureau en kruk"];

const descriptions = ["Een prachtige minimalistische oplossing voor het hoger plaatsen van een standbeeld. Voor de klant een mooie driepoot op maat gemaakt voor specifiek dit standbeeld.",

 "Robuuste Loungeset van dikke douglas houten balken. Speciaal op maat gemaakt voor de plek waar hij staat. Door de combinatie van behandeld stalen frame met gebeitste houten balken is deze set erg slijtvast en zat hij lang mooi blijven.",

 "Dit leuke eiken bijzettafeltje is ideaal om het gevoel van natuur naar binnen te halen. Door de combinatie met een subtiel stalen frame wordt de aandacht gevestigd op het mooie natuurlijke eikenhouten blad.",

 "Speciaal bij de rest van het interieur en precies passend in de ruimte dit stalen Z-frame bureau gemaakt met een dik eiken blad. De perfecte oplossing voor een werkplek die in deze hoek past en prachtig staat bij de rest van de inrichting"];


const CardGrid: React.FC<CardGridProps> = ({ setCardSelection }) => {  // Updated prop name

  const [data, setData] = useState([]);

  const [selectedCard, setSelectedCard] = useState(null);

  console.log("setCardSelection prop in CardGrid:", setCardSelection);  // Updated console log

  const totalProjects = 4;


  useEffect(() => {

    const projects = Array.from({ length: totalProjects }, (_, i) => {
      const projectNumber = i + 1;
      const imageBase = `/images/projects/p${projectNumber}`;
      return {
        img: `${imageBase}a.jpg`,
        title: titles[i],
        description: descriptions[i],
        images: [
          `${imageBase}a.jpg`,
          `${imageBase}b.png`,
          `${imageBase}c.png`
        ],
      };
    });

    setData(projects);
    console.log("Data in CardGrid:", projects);
  }, [titles, descriptions])
  ;


  return (
<AnimatePresence>
  <Flex className="grid" justifyContent="center">
    {data.map((item, index) => (
     <motion.div
     key={index}
     exit={{ opacity: 0 }}
     transition={{ duration: 0.2 }}
   >
        <Card data={item} setSelectedCard={setSelectedCard} />
      </motion.div>


))}

</Flex>
</AnimatePresence>
  );
};

export default CardGrid;
