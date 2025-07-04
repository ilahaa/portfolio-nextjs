"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from '@/utils/animations';

const Hero = () => {
    return (
        <section className='py-28 container max-w-7xl mx-auto px-4'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col items-center mb-4'>
                    <Image src="/profil.png" alt='profile image' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                    className='text-4xl md:text-6xl font-bold mb-6'>Hi, I&apos;m <span className='text-primary'>Ilaha Hasanli</span></motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.5 }}
                    className='text-xl md:text-2xl text-gray-600 '>Frontend Developer</motion.p>

                <div className='flex justify-center space-x-4 mt-6'>
                    <Link href="/" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300">
                        <FaGithub />
                    </Link>
                    <Link href="/" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300">
                        <FaLinkedin />
                    </Link>
                    <Link href="/" className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300">
                        <FaInstagram />
                    </Link>
                </div>

                <div className='flex flex-col md:flex-row justify-center gap-4'>
                    <Link href="/projects" className='bg-primary mt-6 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>View Projects</Link>

                    <Link href="/contact" className='bg-gray-500 mt-6 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-080 hover:text-primary transition-colors'>Contact Me</Link>

                </div>
            </div>
        </section>
    )
}

export default Hero
