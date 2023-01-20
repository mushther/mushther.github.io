import { Box, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
    return (
        <Box>
            <Box
                w={'100%'}
                m='auto'
                h={'auto'}
                p={'70px 195px 20px 195px'}
                style={{
                    background: 'linear-gradient(black,midnightblue)'
                }}>
                <Heading textAlign={'start'} textDecoration={'underline'}>Skills</Heading>

            </Box>
            <Box
                w={'100%'}
                m='auto'
                h={'auto'}
                p={'0px 195px 70px 195px'}
                style={{
                    background: 'linear-gradient(midnightblue,midnightblue)'
                }}
            >
                <Grid templateColumns='repeat(3, 1fr)' gap={20} alignItems={'center'} justifyContent={'center'} p={'50px 0px 0px 0px'}>
                    <GridItem
                        _hover={{
                            boxShadow: 'rgb(254, 81, 0) 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'}
                        border={'1px solid yellow'}
                        w='100%'

                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/htmllogo.2ba4fabc69a89a8f71e6.png' />
                        <Heading >HTML</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'blue 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/csslogo.69a82c2d9e45c933a9cb.png' />
                        <Heading>CSS</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'yellow 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/javascriptlogo.1ccd6ef9bb1f9c84ef00.png' />
                        <Heading>JavaScript</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'rgb(2, 135, 159) 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/reactlogo.0cf951a69d8e58f83f9d.png' />
                        <Heading>React</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'green 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/nodelogo.952a9ea986dcfa5229ad.png' />
                        <Heading>NodeJS</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'rgb(81, 209, 231) 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/chakralogo.be115b2a2bfe791e050c.png' />
                        <Heading>Chakra</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'red 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAZlBMVEUAAADMGjO9HCa/IyvCISfCISa/ICnCIyfBISjCICi/ICfBIijCISfAIifBISbCIibAICfBIijAISfBIifBIifCISjCISfBISfAIifBISfBISjBISjBISfBISfCISfBISfBISf///9G+OcdAAAAIHRSTlMAChskLjY4O0ZHSFJcaWtxdoCKj5CaoqSvuMHIz9Lg7HWYYxsAAAABYktHRCHEbA0WAAAChklEQVR42u3cy1KDMBiA0cLEqZdxinZc+f5v5r7jBa0YOj4B/otMDYVztmRCSL6WHZsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBqzUP9NbyNU1e2t9UXl98nL3XNAgJIu/pr+P6cunJTf3XjdAC7JQTQ+hNcNwEIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAALgUqXiG4TUYcH9d8fkOORjwVHFx+RAMuIs+kPHxFQzYt2cPYOyDAduaAfRzDiDcuqsogGM0w6NXAAJAAAgAASAABIAAEAACQAACsAUCQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIgH+RFv58TeOMVx3AsyP2CkAACAABIAAEgAAQAAJAAAhAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAWIP2UzjBEA3J0i3zG5xtPhRP8sbihrb51Y3iL6AMQ8/6ARteVzvCS/ci9AhAAAkAACAABIAAEgAAQgABsgQAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAAXL4069Ud+9IZTo4YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACm/AIk9SxUF4DEvgAAAABJRU5ErkJggg==' />
                        <Heading>npm</Heading>
                    </GridItem>
                    <GridItem
                        _hover={{
                            boxShadow: 'white 0px 5px 10px 1px'
                        }}
                        p={3}
                        borderRadius={70}
                        boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
                        border={'1px solid yellow'}
                        w='100%'
                    >
                        <Image w={20} h={20} p={2} display={'block'} m={'auto'} src='https://ravi80595.github.io/static/media/githublogo.3b9e32903aa89111875d.png' />
                        <Heading>GitHub</Heading>
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    )
}

export default Skills