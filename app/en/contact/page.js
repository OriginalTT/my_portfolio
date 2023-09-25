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
                window.alert('Success! Thanks for reaching out.\n連絡承りました。返信までしばらくお待ちください。');
            }, (error) => {
                window.alert('Something went wrong. Try again!\nエラーが起きました。しばらくしてから再度お試しください。');
            });
    };


    return (
        <main className='flex flex-col items-center'>
            <motion.h1
                className="font-bold text-9xl mt-[100px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >\I'm Here!/</motion.h1>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                className="p-10 w-[500px] rounded-xl flex flex-col items-center gap-5 mx-10 my-10
                bg-highlight2"
                ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="name">Name</label> <br />
                    <input
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        type="text" id="name" name="name" required />
                </div>

                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        type="email" id="email" name="email" required />
                </div>

                <div>
                    <label htmlFor="message">Message</label> <br />
                    <textarea
                        className="bg-transparent p-2 border-offwhite border rounded-xl w-[400px]"
                        id="message" name="message" rows="4" required></textarea>
                </div>

                <div>
                    <button type="submit" value={'Send'}
                        className="bg-offwhite text-highlight rounded-full px-5 py-3 drop-shadow-md ml-[300px]
                        box-border border-2 border-offwhite hover:text-offwhite hover:bg-highlight">Submit</button>
                </div>
            </motion.form>
        </main>
    )
}

export default contact