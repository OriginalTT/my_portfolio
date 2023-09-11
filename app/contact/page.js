'use client';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion, spring } from 'framer-motion';

const contact = () => {
    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
            .then((result) => {
                window.alert('Success! Thanks for reaching out.');
            }, (error) => {
                window.alert('Something went wrong. Try again!');
            });
    };


    return (
        <main>
            <motion.h1
                className="font-bold text-9xl mt-[200px] mx-10"
                initial={{ scale: 0, x: -500 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 120, bounce: 1, }}
            >\I'm Here!/</motion.h1>
            <motion.form
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                className="p-10 w-[500px] rounded-xl flex flex-col items-center gap-5 mx-10 my-10"
                ref={form} onSubmit={sendEmail}>
                <div>
                    <label for="name">Name</label> <br />
                    <input
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        type="text" id="name" name="name" required />
                </div>

                <div>
                    <label for="email">Email</label> <br />
                    <input
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        type="email" id="email" name="email" required />
                </div>

                <div>
                    <label for="message">Message</label> <br />
                    <textarea
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        id="message" name="message" rows="4" required></textarea>
                </div>

                <div>
                    <button type="submit" value={'Send'}
                        className="bg-offwhite text-highlight rounded-full px-3 py-2 drop-shadow-md ml-[300px]">Submit</button>
                </div>
            </motion.form>
        </main>
    )
}

export default contact