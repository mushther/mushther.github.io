import { Box, Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaExternalLinkSquareAlt, FaEye } from 'react-icons/fa'

const ProjectCard = ({ PNG, ProjectName, ProjectTech, ProjectDiscription }) => {
    return (
        <Flex _hover={{
            transform: 'scale(1.1)',
            transition: ' 1s'
        }}
            w='100%'
            h='auto'
            border={'1px dashed yellow'}
            p={4}
            bg={'midnightblue'}
            borderRadius={'3xl'}
            boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}
        >
            <Box
                borderRadius={'15px 0px 0px 15px'}
            // borderLeft='1px solid yellow'
            //borderBottom='1px dashed yellow'
            //borderTop='1px dashed yellow'
            // p={"10px"}
            >
                <Image _hover={{
                    transform: 'scale(1.1)',
                    borderRadius: '0px',
                    transition: ' 1s'
                }}
                    borderRadius={'15px 0px 0px 15px'}
                    w={'1600px'}
                    h={'400px'}

                    src={PNG} />
            </Box>
            <Grid p={"30px 40px 40px 80px"}
                border='0px solid red'
                borderRadius={'0px 15px 15px 0px'}
            //  borderRight='1px solid yellow'
            // borderBottom='1px solid yellow'
            // borderTop='1px solid yellow'
            >
                <Heading size={'2xl'} textAlign={'start'}>{ProjectName}</Heading>
                <br />
                <Text textAlign={'start'} >{ProjectDiscription}</Text>
                <br />
                <Heading size={'xs'} textAlign={'start'}>Tech Stack: {ProjectTech}</Heading>
                <br />
                <Flex justifyContent={'space-between'} alignItems={'start'} gap={5}>
                    <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://fascinating-alfajores-ae5186.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                    <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/snugly-sponge-3677' ><FaEye fontSize={20} /> View Code</Button>
                </Flex>
            </Grid>
        </Flex>
    )
}

export default ProjectCard