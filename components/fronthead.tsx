import React from "react";
import { chakra, Box, Button, Flex } from "@chakra-ui/react";
import "@fontsource-variable/raleway";
import { useRouter } from "next/router";
import NextLink from "next/link";
import NewButton from "../components/newbutton"

export default function FrontHead() {
  const bg = "linear-gradient(55deg, #34139546 30%, #0F2E77CE 70%)";
  const router = useRouter();

  //  const bg = "linear-gradient(180deg, #225282 100%, #1A2B3C 70%, #1A2B3C 40%)";
  const titleColor = "#FFFFFF";
  const subtitleColor = "#FFD700";
  const textColor = "#FFFFFF";
  const subtitleOpacity = "1";
  const textShadow = "1px 1px 2px rgba(0,0,0,0.5)";

  //buttons

  const scheme = "yellow"; // Replace with your preferred color scheme
  const step1 = "600";
  const step2 = "500";
  const step3 = "300";
  const size = "lg"; // Keeping only the largest size

  return (

    <Flex direction="column" align="center" justify="center" p={8}>
      <Box
        mx="auto"
        my="auto"
        display="flex"
        maxW={{ base: "7xl" }}
        width={{ base: "100vw", sm: "100vw" }}
        transition={"background 0.3s ease"}
        px={{ base: 4, sm: 6, lg: 10 }}
        mt="auto"
        position="relative"
        zIndex={2}
        bg={bg}
        justifyContent="center"
        shadow={{ base: "none", md: "dark-lg" }}
        border='1mm ridge #3A80C56F'
        width={{ base: "100vw", sm: "100vw" }}
        maxW={{ base: "100vw", sm: "100vw", md: "xl", lg: "2xl", xl: "3xl" }}
      >
        {/* image in the middle */}

        <Box
          w="full"
          display="flex"
          flexDir="column"
          height="full"
          justifyContent="center"
          alignItems="center"
          position="relative"
          aspectRatio={1}
          zIndex={0}
        >
          <Box
            as="img"
            opacity={0.4}
            src="https://i.imgur.com/41sjJtw.png"
            alt="RB logo"
            position="absolute"
            width="100%"
            height="100%"
            top="50"
            left="50"
            bot="50"
            zIndex={-1}
            top="auto"
            bottom="auto"
            right="auto"
            left="auto"
            objectFit="contain"
          />
          <chakra.h1
            letterSpacing="tight"
            lineHeight="short"
            fontWeight="extrabold"
            rounded="md"
            color={titleColor}
            _dark={{ color: titleColor }}
            opacity={subtitleOpacity}
            textShadow={textShadow}
            textAlign="center"
          >
            <chakra.span
              fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
              fontFamily="Raleway Variable"
              pt="20"
              display={{ base: "block", sm: "md", lg: "block" }}
            >
              Waar dromen
            </chakra.span>
            <chakra.span
              fontFamily={"Raleway Variable"}
              fontSize={{ base: "5xl", sm: "5xl", lg: "6xl" }}
              color={subtitleColor}
              opacity={subtitleOpacity}
              textShadow={textShadow}
            >
              vorm krijgen
            </chakra.span>
          </chakra.h1>
          <chakra.p
            mx="auto"
            my="auto"
            mt={{ base: 3, sm: 5, md: 5 }}
            fontSize={{ sm: "2xl", md: "2xl" }}
            maxW={{ sm: "xl" }}
            color={textColor}
            textAlign="left"
            backdropFilter="blur(1.2px)"
            shadow="xl"
            border="solid 5px transparent"
          >
            Stap binnen in mijn wereld van solide vakmanschap, waar hout en
            staal samenkomen om unieke meubelstukken te creëren. Van jouw ideeën
            tot tastbare kunstwerken, elke creatie vertelt een verhaal van
            ambacht en passie. Ontdek de harmonie van materialen en de kracht
            van individualiteit bij RB Lasprojecten.
          </chakra.p>
          {/* New Buttons */}
          {/* <Flex justifyContent="center" bot="0" mt={5}> */}
          <Flex
            display="flex"
            flexDir="row"
            justifyContent="center"
            p="30"
          >
            <NewButton href="/projects" label="Bekijk mijn projecten" />
            <NewButton href="/contact" label="Neem contact op" />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
