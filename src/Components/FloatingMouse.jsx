import { Box, Button, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa"
const FloatingMouse = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');
    const [flag, setFlag] = useState(false);

    const handleClick = (n) => {
        window.scrollTo({
            top: n,
            left: 0,
            behavior: 'smooth'
        });
    }
    const listenToScroll = () => {
        let heigthToHidden = 500;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (windowScroll > heigthToHidden) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])
    //console.log(window.innerHeight)
    return (
        <>
            {flag && <Box position={'fixed'} top={isLargerThan480 ? '650px' : '660px'} left={isLargerThan480 ? "1450px" : "340px"} >
                <Button bg={'none'} height={isLargerThan480 ? "52px" : "47px"} border={"1px solid yellow"} borderRadius={"50%"} onClick={() => handleClick(0)} >
                    <FaArrowUp
                        fontSize={isLargerThan480 ? 20 : 16}
                        color='yellow'
                    />
                </Button>
            </Box>}
        </>
    )
}

export default FloatingMouse