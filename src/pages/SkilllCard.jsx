import { GridItem, Heading, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const SkilllCard = ({ PNG, skill_name, hover_shadowColor }) => {

    const [isLargerThan480] = useMediaQuery('(min-width: 981px)');

    return (
        <GridItem
            _hover={{
                boxShadow: hover_shadowColor
            }}
            borderRadius={'50px 0px 50px 0px'}
            boxShadow={'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;'}
            border={'1px solid black'}
            w={isLargerThan480 ? '70%' : '100%'}
            p={isLargerThan480 ? 3 : 4}
        >
            <Image sizes='xs' p={2} display={'block'} m={'auto'} src={PNG} />
            <Heading size={'xs'}>{skill_name}</Heading>
        </GridItem>
    )
}

export default SkilllCard
