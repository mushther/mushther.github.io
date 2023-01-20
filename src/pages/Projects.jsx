import { Box, Button, Flex, Grid, Text, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
//import { FaExternalLinkSquareAlt, FaEye } from "react-icons/fa"
import PNG1 from '../Data/Deccon-Chronile-homeage.png'
import PNG2 from '../Data/boatlife.png'
import PNG3 from '../Data/wrike-homepage.png'
import PNG4 from '../Data/Healthcare-homepage.png'
import PNG5 from '../Data/portfolio.png'
import ProjectCard from './ProjectCard'
//Healthcare-homepage.png
const Projects = () => {
    return (
        <Box
            w={'100%'}
            m='auto'
            h={'auto'}
            p={'70px 195px 70px 195px'}
            style={{
                background: 'linear-gradient(midnightblue,black)'
            }}
        >
            <Heading p={'0px 0px 50px 0px'} textAlign={'start'} textDecoration={'underline'}>Project's</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={6} >
                <ProjectCard
                    PNG={PNG1}
                    ProjectName='Deccon Chronile'
                    ProjectDiscription='Deccon Chronile is an Newspapper website. Here users can use login, singup and sidebar functionality.'
                    ProjectTech='HTML,CSS,Javascript'
                />
                <ProjectCard
                    PNG={PNG2}
                    ProjectName='BoatlifeStyle'
                    ProjectDiscription='BoatlifeStyle is an E-commerce website.Here users can login singup and add to cart,buy and review products.'
                    ProjectTech='HTML,CSS,Javascript'
                />
                <ProjectCard
                    PNG={PNG3}
                    ProjectName='Wrike'
                    ProjectDiscription='Wrike is project management application service provider website.Here users can login, add to manage project.'
                    ProjectTech='HTML,CSS,Javascript,React,Chakra UI'
                />
                <ProjectCard
                    PNG={PNG4}
                    ProjectName='HealthCare'
                    ProjectDiscription='HealthCare is an Appointment booking website.Here users can login, book Appointment doctor`s wise and aslo check booking status.'
                    ProjectTech='HTML,CSS,Javascript,React,Chakra UI'
                />
                {/* <ProjectCard
                    PNG={PNG5}
                    ProjectName='Wrike'
                    ProjectDiscription=''
                    ProjectTech='HTML,CSS,Javascript'
        />*/}
            </Grid>
        </Box>
    )
}

export default Projects

/**

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

                            src={PNG1} />
                    </Box>
                    <Grid p={"30px 40px 40px 80px"}
                        border='0px solid red'
                        borderRadius={'0px 15px 15px 0px'}
                    //  borderRight='1px solid yellow'
                    // borderBottom='1px solid yellow'
                    // borderTop='1px solid yellow'
                    >
                        <Heading size={'2xl'} textAlign={'start'}>Deccon Chronile</Heading>
                        <br />
                        <Text textAlign={'start'} >Deccon Chronile is an Newspapper website. Here users can use login, singup and sidebar functionality.</Text>
                        <br />
                        <Heading size={'xs'} textAlign={'start'}>Tech Stack: HTML,CSS,Javascript</Heading>
                        <br />
                        <Flex justifyContent={'space-between'} alignItems={'start'} gap={5}>
                            <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://fascinating-alfajores-ae5186.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                            <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/snugly-sponge-3677' ><FaEye fontSize={20} /> View Code</Button>
                        </Flex>
                    </Grid>
                </Flex>
                 <GridItem _hover={{
                    transform: 'scale(1.1)',
                    transition: ' 1s'
                }}
                    w='100%'
                    h='auto'
                    border={'0px solid red'}
                    p={4} bg={'midnightblue'}
                    borderRadius={'3xl'}
                    boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}>
                    <Image _hover={{
                        transform: 'scale(1.1)',
                        borderRadius: '0px',
                        transition: ' 1s'
                    }} borderRadius={'15px 15px 0px 0px'} src={PNG2} />
                    <Heading >BoatlifeStyle</Heading>
                    <br />
                    <Text textAlign={'start'} >BoatlifeStyle is an E-commerce website.Here users can login singup and add to cart,buy and review products.</Text>
                    <br />
                    <Heading size={'xs'}>Tech Stack: HTML,CSS,Javascript</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'}>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://chipper-seahorse-d1eee1.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/private-furniture-6305' ><FaEye fontSize={20} /> View Code</Button>
                    </Flex>
                </GridItem>
                <GridItem _hover={{
                    transform: 'scale(1.2)',
                    transition: ' 1s'
                }}
                    w='100%'
                    h='auto'
                    border={'0px solid red'}
                    p={4} bg={'midnightblue'}
                    borderRadius={'3xl'}
                    boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}>
                    <Image _hover={{
                        transform: 'scale(1.1)',
                        borderRadius: '0px',
                        transition: ' 1s'
                    }} borderRadius={'15px 15px 0px 0px'} src={PNG3} />
                    <Heading >Wrike</Heading>
                    <br />
                    <Text textAlign={'start'}>Wrike is project management application service provider website.Here users can login, add to manage project.</Text>
                    <br />
                    <Heading size={'xs'}>Tech Stack: HTML,CSS,Javascript,React,Chakra UI</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'}>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://reliable-longma-4de1cf.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/knotty-sock-1389'><FaEye fontSize={20} /> View Code</Button>
                    </Flex>
                </GridItem>
                <GridItem _hover={{
                    transform: 'scale(1.2)',
                    transition: ' 1s'
                }}
                    w='100%'
                    h='auto'
                    border={'0px solid red'}
                    p={4} bg={'midnightblue'}
                    borderRadius={'3xl'}
                    boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}>
                    <Image _hover={{
                        transform: 'scale(1.1)',
                        borderRadius: '0px',
                        transition: ' 1s'
                    }} borderRadius={'15px 15px 0px 0px'} src={PNG4} />
                    <Heading >HealthCare</Heading>
                    <br />
                    <Text textAlign={'start'}>HealthCare is an Appointment booking website.Here users can login, book Appointment doctor's wise and aslo check booking status </Text>
                    <br />
                    <Heading size={'xs'}>Tech Stack: HTML,CSS,Javascript,React,Chakra UI</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'}>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://admirable-blini-b833e7.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/reactJsApp/tree/main/Apps/project-2/bookappointment'><FaEye fontSize={20} /> View Code</Button>
                    </Flex>
                </GridItem>
                <GridItem
                    w='100%'
                    h='auto'
                    border={'0px solid red'}
                    p={4} bg={'midnightblue'}
                    borderRadius={'3xl'}
                    boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}>
                    <Image _hover={{
                        transform: 'scale(1.1)',
                        borderRadius: '0px',
                        transition: ' 1s'
                    }} borderRadius={'15px 15px 0px 0px'} src={PNG5} />
                    <Heading >Port</Heading>
                    <br />
                    <Text textAlign={'start'}>Bluemercury is an E-commerce website.Here users can add to cart,buy and review products.</Text>
                    <br />
                    <Heading size={'xs'}>Tech Stack: HTML,CSS,Javascript</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'}>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href=''><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2}><FaEye fontSize={20} as='a' href='' /> View Code</Button>
                    </Flex>
                </GridItem>
 */