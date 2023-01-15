import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box m={'auto'}
            w={'100%'}
            h={'auto'}
            p={'70px 195px 70px 195px'} textAlign='start'
            style={{
                background: 'linear-gradient(midnightblue,black)'
            }}
        >
            <Heading textDecoration={'underline'}>About</Heading>
            <br />
            <Text as='kbd' fontSize={18} >Hello! My name is Mushter Hussain & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</Text>
            <br />
            <br />
            <Text w={'100%'} as='kbd' fontSize={18} >My field of interest is building new Web Technologies and also in areas related to Deep Learning and Natural Language Processing.</Text>
            <br />
            <br />
            <Text w={'100%'} as='kbd' fontSize={18} > I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have work experience in multiple projects and clone projects with team collaboration.</Text>
        </Box >
    )
}

export default About