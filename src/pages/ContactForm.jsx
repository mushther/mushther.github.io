import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button, FormLabel, Input, Textarea, useMediaQuery, useToast } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

export const ContactForm = () => {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false)
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    const handleClick = (n) => {
        window.scrollTo({
            top: n,
            left: 0,
            behavior: 'smooth',
            transition: '1s'
        });
    }

    const form = useRef();
    //console.log(form.current);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.sendForm('service_ftc8bwv', 'template_cs78nm7', form.current, 'hNojCUlgZkE3wBLQi')
            .then((result) => {
                setIsLoading(false);
                toast({
                    title: 'Message sent Successfully.',
                    description: "Thank you for contacting me.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                })
                handleClick(0)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} style={isLargerThan480 ? {
            width: '70%',
            textAlign: 'start'
        } : {
            width: '95%',
            margin: 'auto',
            textAlign: 'start'
        }}>
            <FormLabel>Name</FormLabel>
            <Input position={'none'} type="text" name="user_name" placeholder='Name' />
            <FormLabel>Email</FormLabel>
            <Input position={'none'} type="email" name="user_email" placeholder={'Email'} />
            <FormLabel>Message</FormLabel>
            <Textarea position={'none'} name="message" placeholder={'Message'} />
            <FormLabel></FormLabel>
            <Button position={'none'} type='submit' isLoading={isLoading} w={isLargerThan480 ? "" : '100%'} colorScheme='yellow' gap={3}>Send Message <FaPaperPlane /></Button>

        </form>
    );
};