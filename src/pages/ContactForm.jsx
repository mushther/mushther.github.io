import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, FormLabel, Input, Textarea, useMediaQuery } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

export const ContactForm = () => {
    const [isLargerThan480] = useMediaQuery('(min-width: 681px)');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ftc8bwv', 'template_cs78nm7', form.current, 'hNojCUlgZkE3wBLQi')
            .then((result) => {
                // console.log(result.text);
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
            <Input type="text" name="user_name" placeholder='Name' />
            <FormLabel>Email</FormLabel>
            <Input type="email" name="user_email" placeholder={'Email'} />
            <FormLabel>Message</FormLabel>
            <Textarea name="message" placeholder={'Message'} />
            <FormLabel></FormLabel>
            <Button type='submit' w={isLargerThan480 ? "" : '100%'} colorScheme='yellow' gap={3}>Send Message <FaPaperPlane /></Button>

        </form>
    );
};