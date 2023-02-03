import { Box, Grid, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
//import { FaExternalLinkSquareAlt, FaEye } from "react-icons/fa"
import PNG1 from '../Data/Deccon-Chronile-homeage.png'
import PNG2 from '../Data/boatlife.png'
import PNG3 from '../Data/wrike-homepage.png'
import PNG4 from '../Data/Healthcare-homepage.png'
//import PNG5 from '../Data/portfolio.png'
import ProjectCard from './ProjectCard'
import { FaProjectDiagram } from 'react-icons/fa'
//Healthcare-homepage.png
const Projects = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    return (
        <Box
            w={'auto'}
            m='auto'
            h={'auto'}
            p={isLargerThan480 ? '70px 195px 70px 195px' : '30px'}
            style={{
                background: '#092637'
            }}
        >
            <Heading p={'0px 0px 50px 0px'} textAlign={'start'} textDecoration={'underline'} display='flex' gap={3} alignItems={'center'} size={isLargerThan480 ? 'xl' : 'md'}><FaProjectDiagram />Project's</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={20} >
                <ProjectCard
                    PNG={PNG1}
                    ProjectName='Deccon Chronile'
                    ProjectDiscription='Deccon Chronile is an Newspapper website. Here users can use login, singup and sidebar functionality.'
                    ProjectTech='HTML,CSS,Javascript'
                    Src_Git='https://github.com/mushther/snugly-sponge-3677'
                    Src_netlify='https://fascinating-alfajores-ae5186.netlify.app/'
                />
                <ProjectCard
                    PNG={PNG2}
                    ProjectName='BoatlifeStyle'
                    ProjectDiscription='BoatlifeStyle is an E-commerce website.Here users can login singup and add to cart,buy and review products.'
                    ProjectTech='HTML,CSS,Javascript'
                    Src_Git={'https://github.com/mushther/private-furniture-6305'}
                    Src_netlify={'https://chipper-seahorse-d1eee1.netlify.app/'}
                />
                <ProjectCard
                    PNG={PNG3}
                    ProjectName='Wrike'
                    ProjectDiscription='Wrike is project management application service provider website.Here users can login, add to manage project.'
                    ProjectTech='HTML,CSS,Javascript,React,Chakra UI'
                    Src_Git={'https://github.com/mushther/knotty-sock-1389'}
                    Src_netlify={'https://reliable-longma-4de1cf.netlify.app/'}
                />
                <ProjectCard
                    PNG={PNG4}
                    ProjectName='HealthCare'
                    ProjectDiscription='HealthCare is an Appointment booking website.Here users can login, book Appointment doctor`s wise and aslo check booking status.'
                    ProjectTech='HTML,CSS,Javascript,React,Chakra UI'
                    Src_Git={'https://github.com/mushther/reactJsApp/tree/main/Apps/project-2/bookappointment'}
                    Src_netlify={'https://brilliant-starship-daa4be.netlify.app/'}
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