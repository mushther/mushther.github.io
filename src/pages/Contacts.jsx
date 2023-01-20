import { Heading, Box, Input, Button, Text, FormControl, FormLabel, Tooltip, useClipboard } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedin, FaPaperPlane, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'
import { } from 'react-router-dom'

const Contacts = () => {

    const { hasCopied, onCopy } = useClipboard("mushther2121999@gmail.com");

    return (
        <Box style={{
            background: 'linear-gradient(black, midnightblue)',
            paddingBottom: '15px'

        }}>
            <Box
                w={'100%'}
                m='auto'
                h={'auto'}
                p={'70px 195px 70px 195px'}

                display='flex'
                justifyContent={'space-around'}
            >
                <Box>
                    <Heading size={'md'}>Get in Touch</Heading>
                    <Heading size={'md'} color={'yellow'}>Contact me</Heading>
                </Box>
                <FormControl w={'70%'} textAlign={'start'}>
                    <FormLabel>Name</FormLabel>
                    <Input color='white' placeholder='Name' />
                    <br />
                    <br />
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Email' />
                    <br />
                    <br />
                    <FormLabel>Message</FormLabel>
                    <Input placeholder='Message' />
                    <br />
                    <br />
                    <Button colorScheme={'yellow'} gap={3}>Send Message<FaPaperPlane /></Button>
                </FormControl>
            </Box>
            <Box mb={10} display={'flex'} justifyContent='center' gap={5} fontSize={40}>
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