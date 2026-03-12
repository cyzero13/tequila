import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const isMobile = useMediaQuery({maxWidth: 767});


    useGSAP(() => {
        
        const video = videoRef.current;
        if (!video) return;

        const heroSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })


        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' :'bottom top'

        let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "video",
            start: startValue,
            end: endValue,
            scrub: true,
            pin: true,
        },
        });
        
        const animateVideo = () => {
            tl.to(video, {
                currentTime: video.duration,
                
            });
        };

        if (video.readyState >= 1) {
            animateVideo();
        } else {
            video.addEventListener("loadedmetadata", animateVideo);
        }

    }, [])

    return (
        <>
            <section id="home" className='noisy relative z-10 min-h-dvh w-full border border-transparent'>
                <h1 className='title md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra' >MOJITO</h1>
                <img src="./images/hero-left-leaf.png" alt="left-leaf" className='absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3'/>
                <img src="./images/hero-right-leaf.png" alt="right-leaf" className='absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24'/>

                <div className='container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5'>
                    <div className='flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto'>
                        <div className='space-y-5 hidden md:block'>
                            <p className='2xl:text-start text-center'>Cool. Crisp. Classic</p>
                            <p className='font-modern-negra text-6xl text-yellow max-w-xl subtitle'>
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>

                        <div className='space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full'>
                            <p className='text-left subtitle'>
                                Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>

                            <a href='#cocktails' className='font-semibold opacity-80 2xl:text-start text-center hover:text-yellow'>
                                View Cocktails
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='absolute inset-0 video'>
                <video 
                    ref={videoRef}
                    src="./videos/output.mp4"
                    className='w-full md:h-[80%] h-1/2 absolute bottom-0 left-0 md:object-contain object-bottom object-cover'
                    muted
                    playsInline
                    preload='auto'
                    >
                    
                </video>
            </div>
        </>
    )
}

export default Hero