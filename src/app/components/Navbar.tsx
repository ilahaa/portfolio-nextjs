"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';
import { div } from 'framer-motion/client';

const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' }
    ]
    return (
        <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 dark:border-gray-700'>
            <div className='container max-w-7xl mx-auto px-4'>
                {/* Desktop menu */}
                <div className='
        flex items-center justify-between h-16'>
                    <Link href="/" className='text-xl font-bold text-primary'>Devfolio&trade;  </Link>

                    {/* desktop menus */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <button
                        onClick={toggleTheme}
                         className='p-2 rounded-lg hover_bg-gray-100 text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                            {
                                theme === "dark" ? (
                                    <SunIcon className='w-5 h-5' />
                                ) : (<MoonIcon className='w-5 h-5' />
                                )
                            }
                        </button>
                    </div>

                    {/* mobile menu button */}
                    <button
                        onClick={toggleMobileMenu}
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                        {
                            isMobileMenuOpen ? (
                                <XMarkIcon className='w-6 h-6 md:hidden' onClick={toggleMobileMenu} />
                            ) : (
                                <Bars3Icon className='w-6 h-6 md:hidden' onClick={toggleMobileMenu} />
                            )
                        }
                    </button>
                </div>

                {/* Mobile menu */}
                {
                    isMobileMenuOpen && (
                        <div className='md:hidden'>
                            <div className='py-4 space-y-4'>
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} className='' onClick={toggleMobileMenu}>
                                            <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                                        </div>
                                    ))
                                }

                                <div>
                                    <button
                                    onClick={toggleTheme}
                                     className='flex items-center py-2 hover:text-primary transition-colors'>
                                        {
                                            theme === "dark" ? (
                                               <> <SunIcon className='w-5 h-5 mr-2' />Light Mode</>
                                            ) : (<><MoonIcon className='w-5 h-5 mr-2' />Dark Mode</>
                                            )
                                        }
                                    </button>
                                </div>

                                </div>
                        </div>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar
