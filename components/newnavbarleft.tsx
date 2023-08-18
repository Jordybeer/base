import { useState } from 'react'
import {
  Flex,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Link,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import React from 'react'

export default function LeftNavbarBackb() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <Flex>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Flex
        borderRight="1px solid #ccc"
        bg="transparent"
        position="fixed"
        top="0"
        right="0"
        left="0"
        zIndex="999"
        align="center"
      >
   <Flex
          display={['flex', 'flex', 'flex', 'flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              _hover={{ bg: "#BFAE73" }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              mx={2}
              _hover={{ bg: "#BFAE73" }}
            >
              About
            </Button>
          </NextLink>
        </Flex>

        <Flex
          display={['flex', 'flex', 'flex', 'flex']}
        >
          <IconButton
            aria-label="Open menu"
            variant="outlined"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={toggleMenu}
            _hover={{ bg: "#BFAE73" }}
            my={5}
            ml={2}
            fontSize="2xl"
            display={{ base: 'block', md: 'none' }}
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
        <DrawerOverlay />
        <DrawerContent bg="#7E71E3B1" color="7F71E3CB"> {/* Set the background color to 7F71E3 */}
          {/* <DrawerCloseButton /> */}
          <DrawerBody >


        <Stack spacing='5' pt='10' align="center" justify="center" fontFamily='Raleway Variable' fontSize='4xlg' >


          {/* font gold */}
        <DrawerHeader
        borderBottomWidth='1px'
        color='#BFAE73'
        fontSize='2xl'
        m='4'
        pt='10'
         >
          RB Lasprojecten
          </DrawerHeader>

          <Button
              as="a"
              href="/"
              variant="ghost"
              aria-label="Menu"
              _hover={{bg: '#BFAE73'}}
            >
              Portfolio
            </Button>
            <Button
              as="a"
              href="/"
              variant="ghost"
              aria-label="Menu"
              _hover={{bg: '#BFAE73'}}
            >
              Te koop
            </Button>
            <Button
              as="a"
              href="/"
              variant="outlined"
              aria-label="Menu"
              _hover={{bg: '#BFAE73'}}
            >
              Over mij
            </Button>
            <Button
              as="a"
              href="/"
              variant="ghost"
              aria-label="Menu"
              _hover={{bg: '#BFAE73'}}
            >
              Contact
            </Button>
            
            </Stack>
            <Box
             justifyContent='center' display='flex' alignContent='center' alignItems='center' m='4' pt='60'>
          <Image src="https://i.imgur.com/jTxqkb2.png" alt="logo"/>

          </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
