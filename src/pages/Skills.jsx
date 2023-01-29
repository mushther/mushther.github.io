import { Box, Grid, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { GiBrain } from "react-icons/gi";
import PNG_HTML from '../Data/HTML-logo.png'
import PNG_CSS from '../Data/CSS-logo.png'
import PNG_JAVASCRIPT from '../Data/JAVASCRIPT-logo.png'
import PNG_REACT from '../Data/REACT-logo.png'
import PNG_NODEJS from '../Data/NODEJS-logo.png'
import PNG_CHAKRA from '../Data/CHAKRA-logo.png'
import PNG_NPM from '../Data/NPM-logo.png'
import PNG_GITHUB from '../Data/GITHUB-logo.png'
import SkilllCard from './SkilllCard';

const Skills = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 981px)');

    return (
        <Box>
            <Box
                w={'auto'}
                m='auto'
                h={'auto'}
                p={isLargerThan480 ? '70px 195px 20px 195px' : "10px"}
                style={{
                    background: 'linear-gradient(black,midnightblue)'
                }}>
                <Heading textAlign={'start'} textDecoration={'underline'} display='flex' size={isLargerThan480 ? 'xl' : 'md'} gap={3} alignItems={'center'}><GiBrain />Skills</Heading>

            </Box>
            <Box
                w={'auto'}
                m='auto'
                h={'auto'}
                p={isLargerThan480 ? '0px 195px 70px 195px' : '30px'}
                style={{
                    background: 'linear-gradient(midnightblue,midnightblue)'
                }}
            >

                <Grid templateColumns={isLargerThan480 ? 'repeat(3, 1fr)' : 'repeat(1,1fr)'} gap={20} alignItems={'center'} justifyContent={'center'} p={'50px 0px 0px 0px'}>

                    <SkilllCard PNG={PNG_HTML} skill_name={"HTML"} hover_shadowColor={'rgb(254, 81, 0) 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_CSS} skill_name={"CSS"} hover_shadowColor={'blue 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_JAVASCRIPT} skill_name={"JAVASCRIPT"} hover_shadowColor={'yellow 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_REACT} skill_name={"REACT"} hover_shadowColor={'rgb(2, 135, 159) 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_NODEJS} skill_name={"NODEJS"} hover_shadowColor={'green 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_CHAKRA} skill_name={"CHAKRA"} hover_shadowColor={'rgb(81, 209, 231) 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_NPM} skill_name={"NPM"} hover_shadowColor={'red 0px 5px 10px 1px'} />

                    <SkilllCard PNG={PNG_GITHUB} skill_name={"GITHUB"} hover_shadowColor={'white 0px 5px 10px 1px'} />
                </Grid>
            </Box>
        </Box>
    )
}

export default Skills