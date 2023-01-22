import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { BsInfoCircle } from 'react-icons/bs'

const About = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    return (
        <Box m={'auto'}
            w={'auto'}
            h={'auto'}
            p={isLargerThan480 ? '70px 195px 70px 195px' : '25px'} textAlign='start'
            style={{
                background: 'linear-gradient(midnightblue,black)'
            }}
        >
            <Heading textDecoration={'underline'} display='flex' gap={3} size={isLargerThan480 ? "xl" : "lg"} alignItems={'center'}><BsInfoCircle />About</Heading>
            <br />
            <Text as='kbd' fontSize={isLargerThan480 ? 18 : 16} >Hello! My name is Mushter Hussain & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</Text>
            <br />
            <br />
            <Text w={'100%'} as='kbd' fontSize={isLargerThan480 ? 18 : 16} >My field of interest is building new Web Technologies and also in areas related to Deep Learning and Natural Language Processing.</Text>
            <br />
            <br />
            <Text w={'100%'} as='kbd' fontSize={isLargerThan480 ? 18 : 16} > I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have work experience in multiple projects and clone projects with team collaboration.</Text>
        </Box >
    )
}

export default About