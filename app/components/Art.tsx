import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
const Art = () => {

    const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
    ];

    const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
    ];


    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';
        
        const maskTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#art',
            start,
            end: 'bottom center',
            scrub: 1.5,
            pin: true
        }
        })
        
        maskTimeline
        .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
        .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
        .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
    })
 
    return (
        <div id="art" className='flex-center flex-col min-h-dvh p-5 mt-20 relative radial-gradient'>
            <div className="container mx-auto h-full pt-20">
            <h2 className="will-fade relative md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8">The ART</h2>
            
            <div className="flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
                <ul className="space-y-4 will-fade">
                {goodLists.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                    <img src="./images/check.png" alt="check" />
                    <p>{feature}</p>
                    </li>
                ))}
                </ul>
                
                <div className="md:w-[60vw] w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden absolute top-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2">
                <img
                    src="./images/under-img.jpg"
                    alt="cocktail"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 masked-img size-full object-contain"
                />
                </div>
                
                <ul className="space-y-4 will-fade">
                {featureLists.map((feature, index) => (
                    <li key={index} className="flex items-center justify-start gap-2">
                    <img src="./images/check.png" alt="check" />
                    <p className="md:w-fit w-60">{feature}</p>
                    </li>
                ))}
                </ul>
            </div>
            
            <div>
                <h2 className="will-fade text-4xl md:text-5xl font-modern-negra text-center mb-10 text-white mt-32">Sip-Worthy Perfection</h2>
                <div id="masked-content" className='opacity-0 md:px-0 px-5 space-y-5 absolute md:bottom-5 bottom-52 left-1/2 -translate-x-1/2'>
                <h3 className='md:text-5xl text-2xl text-center font-serif md:w-full w-80 text-white'>Made with Craft, Poured with Passion</h3>
                <p className='text-lg text-center '>This isn't just a drink. It's a carefully crafted moment made just for you.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Art