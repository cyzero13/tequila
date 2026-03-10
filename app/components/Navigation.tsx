import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Navigation = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: '#00000050',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    const links = [
        {
            id: "cocktails",
            title: "Cocktails",
        },
        {
            id: "about",
            title: "About Us",
        },
        {
            id: "work",
            title: "The Art",
        },
        {
            id: "contact",
            title: "Contact",
        },
    ];

    return (
        <nav className='fixed z-50 w-full top-0 md:px-10'>
            <div className='flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5  mx-auto'>
                <a href="#home" className='flex gap-2 items-center justify-center cursor-pointer text-nowrap md:text-base text-sm'>
                    <img src="./images/logo.png" alt="logo" />
                    <p className='font-modern-negra text-3xl'>Velvet Pour</p>
                </a>

                <ul className='flex justify-center items-center lg:gap-12 gap-7'>
                    { links.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className='cursor-pointer text-nowrap md:text-base text-sm'>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation