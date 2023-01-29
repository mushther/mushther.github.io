import { Box, Button, Flex, Grid, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaExternalLinkSquareAlt, FaEye } from 'react-icons/fa'

const ProjectCard = ({ PNG, ProjectName, ProjectTech, ProjectDiscription, Src_Git, Src_netlify }) => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    return (
        <Flex _hover={{
            transform: 'scale(1)',
            transition: ' 1s'
        }}

            w='auto'
            h='auto'
            m={'auto'}
            //border={'1px dashed yellow'}
            p={isLargerThan480 ? 4 : 2}
            // bg={'midnightblue'}
            borderRadius={'3xl'}
            boxShadow={'white 0px 5px 10px 1px'}
            direction={isLargerThan480 ? 'row' : 'column'}
        >
            <Box
                //borderRadius={'15px 0px 0px 15px'}
                // borderLeft='1px solid yellow'
                //  borderBottom='1px dashed yellow'
                //  borderTop='1px dashed yellow'
                // p={"10px"}
                m={'auto'}
            >
                <Image _hover={{
                    transform: 'scale(1.1)',
                    borderRadius: '0px',
                    transition: ' 1s'
                }}
                    borderRadius={isLargerThan480 ? '15px 0px 0px 15px' : '15px 15px 15px 15px'}
                    w={isLargerThan480 ? '1600px' : '320px'}
                    h={isLargerThan480 ? '400px' : '170px'}
                    boxShadow={' rgba(0, 0, 0, 0.35) 0px 5px 15px'}
                    src={PNG} />
            </Box>
            <Grid p={isLargerThan480 ? "30px 40px 40px 80px" : "10px"}
                border='0px solid red'
            //  borderRadius={'0px 15px 15px 0px'}
            //  borderRight='1px solid yellow'
            // borderBottom='1px solid yellow'
            // borderTop='1px solid yellow'
            >
                <Heading size={isLargerThan480 ? '2xl' : 'xl'} textAlign={'start'}>{ProjectName}</Heading>
                <br />
                <Text textAlign={'start'} >{ProjectDiscription}</Text>
                <br />
                <Heading size={'xs'} textAlign={'start'}>Tech Stack: {ProjectTech}</Heading>
                <br />
                <Flex justifyContent={'space-between'} alignItems={'start'} gap={5}>
                    <Button position={'none'} colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href={Src_netlify} ><FaExternalLinkSquareAlt /> Live</Button>
                    <Button position={'none'} colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href={Src_Git} ><FaEye fontSize={20} /> View Code</Button>
                </Flex>
            </Grid>
        </Flex>
    )
}

export default ProjectCard