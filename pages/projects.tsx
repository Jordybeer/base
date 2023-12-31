import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import CardGrid from "../components/CardGrid";
import ExpandedCard from "../components/ExpandedCard";
import "@fontsource-variable/raleway";
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const titles = [
    "Driepoot standbeeld",
    "Douglas Loungeset",
    "Eiken boomschijf bijzettafel",
    "Z-frame bureau en kruk",
  ];

  const descriptions = [
    "Een prachtige minimalistische oplossing voor het hoger plaatsen van een standbeeld. Voor de klant een mooie driepoot op maat gemaakt voor specifiek dit standbeeld.",
    "Robuuste Loungeset van dikke douglas houten balken. Speciaal op maat gemaakt voor de plek waar hij staat. Door de combinatie van behandeld stalen frame met gebeitste houten balken is deze set erg slijtvast en zat hij lang mooi blijven.",
    "Dit leuke eiken bijzettafeltje is ideaal om het gevoel van natuur naar binnen te halen. Door de combinatie met een subtiel stalen frame wordt de aandacht gevestigd op het mooie natuurlijke eikenhouten blad.",
    "Speciaal bij de rest van het interieur en precies passend in de ruimte dit stalen Z-frame bureau gemaakt met een dik eiken blad. De perfecte oplossing voor een werkplek die in deze hoek past en prachtig staat bij de rest van de inrichting",
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const projects = titles.map((title, i) => {
      const projectNumber = i + 1;
      const imageBase = `/images/projects/p${projectNumber}`;
      return {
        img: `${imageBase}a.jpg`,
        title: title,
        description: descriptions[i],
        images: [`${imageBase}a.jpg`, `${imageBase}b.jpg`, `${imageBase}c.jpg`],
      };
    });

    setData(projects);
  }, []);

  return (
<Flex
  direction="column"
  justify="center"
  align="center"
  paddingTop="10px"
  maxW={{ base: "100%", sm: "100%" }}
  width="100%"
  position="relative"
  fontSize="80%"
  zIndex={20}
  className={styles.container} // Use the class from the CSS module
>
{selectedCard && (
        <div
          onClick={() => setSelectedCard(null)}
          className={styles.overlay} // Use the class from the CSS module
        ></div>
      )}

      <CardGrid setCardSelection={setSelectedCard} data={data} />

      {selectedCard && (
        <ExpandedCard data={selectedCard} setSelectedCard={setSelectedCard} />
      )}
    </Flex>
  );
};

export default Projects;
