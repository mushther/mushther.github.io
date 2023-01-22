import { Heading, Box, Text, Tooltip, useClipboard, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { ContactForm } from './ContactForm';

const Contacts = () => {
    const { hasCopied, onCopy } = useClipboard("mushther2121999@gmail.com");
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    return (
        <Box style={{
            background: 'linear-gradient(black, midnightblue)',
            paddingBottom: '15px'

        }}>
            <Box
                w={'auto'}
                m='auto'
                h={'auto'}
                p={isLargerThan480 ? '70px 195px 70px 195px' : '20px'}

                display={'flex'}
                flexDirection={isLargerThan480 ? 'row' : 'column'}
                justifyContent={'space-around'}
            >
                <Box>
                    <Heading size={'md'}>Get in Touch</Heading>
                    <Heading size={'md'} color={'yellow'}>Contact me</Heading>
                </Box>
                <ContactForm />
            </Box>
            <Box mb={10} display={'flex'} justifyContent='center' gap={5} fontSize={isLargerThan480 ? 40 : 25}>
                <Tooltip
                    label={hasCopied ? "Email Copied!" : "Copy Email"}
                >
                    <Text onClick={onCopy}><FaRegEnvelope /></Text>
                </Tooltip>
                <Tooltip
                    label={hasCopied ? "Number Copied!" : "Copy Number"}
                >
                    <Text onClick={onCopy}><FaPhoneAlt /></Text>
                </Tooltip>
                <Text as='a' href='https://github.com/mushther'><FaGithub /></Text>
                <Text as='a' href='https://www.linkedin.com/in/mushther-h-37a561132/'><FaLinkedin /></Text>

            </Box>
            <Box >
                <Text as='kbd' >Contact :- +91 8699506591</Text>
                <br />
                <Text as='kbd' >Email :- mushther2121999@gmail.com</Text>
                <br />
                <Text as='kbd' >Designed and build by Mushther Hussain, 2022 All rights reserved</Text>
            </Box>
        </Box>
    )
}

export default Contacts