import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCss3, FaDownload, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from 'react-icons/tb'
import { AiFillHtml5 } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
const Home = () => {
    return (
        <Box
            display={'flex'}
            justifyContent='space-between'
            m={'auto'}
            w={'100%'}
            h={'auto'}
            p={20}
            border={"0px solid red"}
            style={{
                background: 'linear-gradient(black, midnightblue)'
            }}
        >
            <Box
                border={"0px solid red"}
                textAlign={'start'}
                m={'auto'}
                mt={7}
            >
                <Heading border={'1px solid white'} p={2} fontSize={20} borderRadius={'20px 20px 20px 0px'} size={'xs'} w={'17%'} color={'yellow.300'}>Hello I'm</Heading >
                <Heading fontSize={80}>Mushther Hussain</Heading>
                <Heading color={'yellow.300'} size={'xl'}> Full Stack Web Developer</Heading>
                <br />
                <Button colorScheme='yellow' color={'midnightblue'} fontSize={16} fontWeight={'bold'} gap={2}><FaDownload />Resume</Button>
                <br />
                <br />
                <Box display={'flex'} gap={2} fontSize={'5xl'}>
                    <Text> <AiFillHtml5 /></Text>
                    <Text><FaCss3 /></Text>
                    <Text> <TbBrandJavascript /></Text>
                    <Text> <FaReact /></Text>
                    <Text> <BsGithub /></Text>
                </Box>
            </Box>
            <Box>
                <Image
                    border={"2px solid yellow"}
                    w='70%'
                    borderRadius={'50%'}
                    src='https://avatars.githubusercontent.com/u/104630096?v=4'
                />

            </Box>
        </Box>
    )
}

export default Home