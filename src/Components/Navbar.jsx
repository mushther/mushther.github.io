import React from 'react'
import { Box, Heading, Button, useMediaQuery } from '@chakra-ui/react'
import { FaBars, FaBookOpen, FaFileAlt, FaHome, FaInfoCircle, FaWhmcs } from "react-icons/fa";
import { MdContactPhone } from 'react-icons/md';
import { RxCross1 } from 'react-icons/rx';

import { useState } from 'react';
const Navbar = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');
    const [isTrue, setIsTrue] = useState(false)

    const handleClick = (n) => {
        window.scrollTo({
            top: n,
            left: 0,
            behavior: 'smooth'
        });
        setIsTrue(false)
    }
    //contact
    return (
        <Box w={'100%'} bgGradient='linear(to-r, black, midnightblue)' position={'fixed'} border={'0px solid yellow'}>
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems='center'
                w='100%'
                m='auto'
                padding={4}
                border={'0px solid yellow'}
            >
                <Box
                    border={'0px solid red'}
                >
                    <Heading fontSize={25} fontFamily={'cursive'} onClick={() => handleClick(0)}>HUSSAIN</Heading >
                </Box>
                {isLargerThan480 ? <Box
                    display='flex'
                    justifyContent="space-between"
                    alignItems='center'
                    w={isLargerThan480 ? '40%' : '100%'}
                    border={'0px solid red'}
                >
                    <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(0)} >Home</Button >
                    <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(500)} >About</Button >
                    <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(1000)} >Skills</Button >
                    <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(1880)} >Projects</Button >
                    <Button color="white" colorScheme={'yellow'} bg={'none'} fontSize={18} onClick={() => handleClick(4100)} >Contact</Button >
                    <Button colorScheme='yellow' fontSize={16} fontWeight={'bold'} gap={2} as='a' href='https://drive.google.com/file/d/1Y5zCHEVq8jYXvszYZY-HwaIwCzxPFFzl/view?usp=sharing'><FaFileAlt />Resume</Button>
                </Box> :
                    <Box>
                        {isTrue ?
                            <RxCross1 fontSize={'25px'} onClick={() => setIsTrue(false)} />
                            : <FaBars fontSize={'25px'} onClick={() => setIsTrue(true)} />}
                    </Box>
                }
            </Box>
            {isTrue ?
                <Box bgGradient='linear(to-r, black, midnightblue)' border={'0px solid red'} p={'15px 15px 35px 15px'} display='grid' gap='20px' behavior='smooth'>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} onClick={() => handleClick(0)} >
                        <FaHome /> <span>Home</span>
                    </Heading>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} onClick={() => handleClick(570)} >
                        <FaInfoCircle /> <span>About</span>
                    </Heading>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} onClick={() => handleClick(1190)} >
                        <FaBookOpen /> <span>Skills</span>
                    </Heading>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} onClick={() => handleClick(3080)} >
                        <FaWhmcs /><span>Projects</span>
                    </Heading>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} onClick={() => handleClick(5400)} >
                        <MdContactPhone /> <span>Contact Us</span>
                    </Heading>
                    <Heading size={'md'} display={'flex'} m='auto' gap={'10px'} w='40%' alignItems='center' justifyContent={'start'} as='a' href='https://drive.google.com/file/d/1Y5zCHEVq8jYXvszYZY-HwaIwCzxPFFzl/view?usp=sharing' >
                        <FaFileAlt /> <span>Resume</span>
                    </Heading>
                </Box>
                : null
            }
        </Box>
    )
}

export default Navbar
