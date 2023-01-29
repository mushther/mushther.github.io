import { Box, Button, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaCss3, FaDownload, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from 'react-icons/tb'
import { AiFillHtml5 } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
//import { Cursor, useTypewriter } from "react-simple-typewriter";
import Resume from '../Data/Mushther-Hussain-Resume.pdf'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
//import {  } from 'react-simple-typewriter/dist/components/Cursor';
const Home = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');
    const [text] = useTypewriter({
        words: ['Full-stack Web developer'],
        loop: 0
    })
    return (
        <Box
            display={isLargerThan480 ? 'flex' : 'grid'}
            justifyContent='space-between'
            m={'auto'}
            w={'auto'}
            h={'auto'}
            p={isLargerThan480 ? "180px 40px 90px 40px" : "110px 40px 90px 40px"}
            border={"0px solid red"}

            style={{
                background: 'linear-gradient(black, midnightblue)'
            }}
        >
            {isLargerThan480 ? null : <Box display={'flex'}
                justifyContent={'end'}>
                <Image
                    border={"2px solid yellow"}
                    w={'50%'}
                    display={'block'}
                    justifyContent={'end'}
                    borderRadius={'50%'}
                    src='https://avatars.githubusercontent.com/u/104630096?v=4'
                />

            </Box>}
            <Box
                border={"0px solid red"}
                textAlign={'start'}
                m={'auto'}
                mt={7}
            >
                <Heading border={'1px solid white'} p={isLargerThan480 ? 2 : 1} fontSize={isLargerThan480 ? 20 : 13} borderRadius={'20px 20px 20px 0px'} w={isLargerThan480 ? '17%' : "23%"} color={'yellow.300'}>Hello I'm</Heading >
                <Heading fontSize={isLargerThan480 ? 80 : 40}>Mushther Hussain</Heading>
                {/* <Heading color={'yellow.300'} size={isLargerThan480 ? 'xl' : 'sm'}> Full Stack Web Developer</Heading> */}
                <Heading color={'yellow.300'} mb={isLargerThan480 ? 5 : 2} size={isLargerThan480 ? 'xl' : 'sm'}>
                    <span style={{ color: 'white' }}>I'm a </span>{text}
                    <Cursor cursorColor="yellow" />
                    {/*    <Image size='5xl' src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&width=495&lines=I+am+a+Full-stack+Web+developer.;Interested+with+working+with+Team.;Curious+to+learn+new+things+!" alt="Typing SVG" />
               */} </Heading>
                <a href={Resume} download>
                    <Button position={'none'} colorScheme='yellow' color={'midnightblue'} fontSize={isLargerThan480 ? 16 : 12} fontWeight={'bold'} gap={isLargerThan480 ? 2 : 1} size={isLargerThan480 ? 'md' : 'sm'} as='a' ><FaDownload />Resume</Button>
                </a>
                <br />
                <br />
                <Box display={'flex'} gap={2} fontSize={isLargerThan480 ? '5xl' : '3xl'}>
                    <Text> <AiFillHtml5 /></Text>
                    <Text><FaCss3 /></Text>
                    <Text> <TbBrandJavascript /></Text>
                    <Text> <FaReact /></Text>
                    <Text> <BsGithub /></Text>
                </Box>
            </Box>
            {isLargerThan480 ? <Box>
                <Image
                    border={"2px solid yellow"}
                    w={'70%'}
                    borderRadius={'50%'}
                    src='https://avatars.githubusercontent.com/u/104630096?v=4'
                />

            </Box> : null}
        </Box>
    )
}

export default Home