import { Box, Button, Flex, Grid, Text, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { FaExternalLinkSquareAlt, FaEye } from "react-icons/fa"
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
            <Grid templateColumns='repeat(3, 1fr)' gap={6} >
                <GridItem _hover={{
                    transform: 'scale(1.2)',
                    transition: ' 1s'
                }}
                    w='100%'
                    h='auto'
                    border={'0px solid red'}
                    p={4} bg={'midnightblue'}
                    borderRadius={'3xl'}
                    boxShadow={'rgb(244, 220, 4) 0px 5px 10px 1px'}
                >
                    <Image _hover={{
                        transform: 'scale(1.1)',
                        borderRadius: '0px',
                        transition: ' 1s'
                    }} borderRadius={'15px 15px 0px 0px'} src='https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Deccon%20Chronile%20homeage_309325.png' />
                    <Heading >Deccon Chronile</Heading>
                    <br />
                    <Text textAlign={'start'} >Deccon Chronile is an Newspapper website. Here users can use login, singup and sidebar functionality.</Text>
                    <br />
                    <Heading size={'xs'} textAlign={'start'}>Tech Stack: HTML,CSS,Javascript</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'} m='auto'>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://fascinating-alfajores-ae5186.netlify.app/'><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href='https://github.com/mushther/snugly-sponge-3677' ><FaEye fontSize={20} /> View Code</Button>
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
                    }} borderRadius={'15px 15px 0px 0px'} src='https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Boat-life%20-homePage_467701.png' />
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
                    }} borderRadius={'15px 15px 0px 0px'} src='https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/wrike%20homepage_407974.png' />
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
                    }} borderRadius={'15px 15px 0px 0px'} src='https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Healthcare%20homepage_847635.png' />
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
                {/*} <GridItem
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
                    }} borderRadius={'15px 15px 0px 0px'} src='https://www.planstreetinc.com/wp-content/uploads/2020/06/AdobeStock_233231388-scaled.jpeg' />
                    <Heading >BlueMercury</Heading>
                    <br />
                    <Text  textAlign={'start'}>Bluemercury is an E-commerce website.Here users can add to cart,buy and review products.</Text>
                    <br />
                    <Heading size={'xs'}>Tech Stack: HTML,CSS,Javascript</Heading>
                    <br />
                    <Flex justifyContent={'space-around'} gap={5} p={'10px 20px 5px 20px'}>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2} as='a' href=''><FaExternalLinkSquareAlt /> Live</Button>
                        <Button colorScheme={'yellow'} color={'midnightblue'} fontWeight={'bold'} gap={2}><FaEye fontSize={20} as='a' href='' /> View Code</Button>
                    </Flex>
        </GridItem>*/}
            </Grid>
        </Box>
    )
}

export default Projects