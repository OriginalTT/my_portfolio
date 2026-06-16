'use client';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const areFieldsFilled = () => {
        return name !== '' && email !== '' && message !== '';
    };

    const form = useRef();
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
            .then((result) => {
                window.alert('Success! Thanks for reaching out.\nYou will recieve an email soon.');
            }, (error) => {
                window.alert('Something went wrong. Try again!\nエラーが起きました。しばらくしてから再度お試しください。');
            });
    };


    return (
        <main className='mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center px-6 py-14 sm:px-8 lg:py-24'>
            <motion.h1
                className="text-center text-5xl font-bold leading-none sm:text-7xl lg:text-9xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >\I&apos;m Here!/</motion.h1>
            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                className="mt-8 flex w-full max-w-[520px] flex-col gap-5 rounded-xl bg-surface p-6 sm:p-8 md:p-10"
                ref={form} onSubmit={sendEmail}>
                <p className='ml-auto text-xs text-red-400'>* Required</p>
                <div className='w-full'>
                    <label htmlFor="name">Name <span className='text-red-400'>*</span></label> <br />
                    <input
                        className="w-full rounded-lg border border-ink bg-transparent p-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                        type="text" id="name" name="name" required
                        onChange={(e) => setName(e.target.value)} />
                </div>

                <div className='w-full'>
                    <label htmlFor="email">Email <span className='text-red-400'>*</span></label> <br />
                    <input
                        className="w-full rounded-lg border border-ink bg-transparent p-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                        type="email" id="email" name="email" required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='w-full'>
                    <label htmlFor="message">Message <span className='text-red-400'>*</span></label> <br />
                    <textarea
                        className="min-h-[140px] w-full resize-y rounded-lg border border-ink bg-transparent p-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                        id="message" name="message" rows="4" required
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <div className='flex w-full justify-end'>
                    <button type="submit" value={'Send'}
                        className={`min-w-[120px] rounded-full bg-ink px-5 py-3 text-canvas drop-shadow-md
                        box-border border-2 border-ink disabled:opacity-30 disabled:cursor-not-allowed
                        ${!areFieldsFilled() ? '' : 'hover:text-canvas hover:bg-accent hover:border-accent'}`}
                        disabled={!areFieldsFilled()}
                    >Submit</button>
                </div>
            </motion.form>
        </main>
    )
}

export default Contact
