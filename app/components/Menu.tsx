import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const allCocktails = [
    {
        id: 1,
        name: "Classic Mojito",
        image: "/images/drink1.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 2,
        name: "Raspberry Mojito",
        image: "/images/drink2.png",
        title: "A Zesty Classic That Never Fails",
        description:
        "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.",
    },
    {
        id: 3,
        name: "Violet Breeze",
        image: "/images/drink3.png",
        title: "Simple Ingredients, Bold Flavor",
        description:
        "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
    },
    {
        id: 4,
        name: "Curacao Mojito",
        image: "/images/drink4.png",
        title: "Crafted With Care, Poured With Love",
        description:
        "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
    },
    ];

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
        xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
        yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [currentIndex]);
    
    const totalCocktails = allCocktails.length;
    
    const goToSlide = (index: number) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        
        setCurrentIndex(newIndex);
    }
    
    const getCocktailAt = (indexOffset: number) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
 
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);
 
    return (
        <section id="menu" aria-labelledby="menu-heading" className='relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient'>
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" className='object-contain absolute bottom-0 left-0 md:w-fit w-1/3'/>
            <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" className='object-contain absolute top-0 right-0 md:w-fit w-1/4'/>
            
            <h2 id="menu-heading" className="sr-only">
            Cocktail Menu
            </h2>
            
            <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto" aria-label="Cocktail Navigation">
            {allCocktails.map((cocktail, index) => {
                const isActive = index === currentIndex;
                
                return (
                <button key={cocktail.id} className={`
                    md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b transition-colors font-modern-negra
                    ${isActive
                        ? 'text-white border-white'
                        : 'text-white/50 border-white/50'}
                    `
                
                }	onClick={() => goToSlide(index)}
                >
                    {cocktail.name}
                </button>
                )
            })}
            </nav>
            
            <div className="flex flex-col justify-between items-center container mx-auto relative">
            <div className="flex items-center justify-between w-full absolute">
                <button className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36" onClick={() => goToSlide(currentIndex - 1)}>
                    <span className='text-3xl font-modern-negra leading-none hidden md:block'>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>
                
                <button className="text-left text-white hover:text-yellow cursor-pointer transition-colors max-w-36" onClick={() => goToSlide(currentIndex + 1)}>
                    <span className='text-3xl font-modern-negra leading-none hidden md:block'>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                </button>
            </div>
            
            <div className="cocktail flex-center mt-10">
                <img src={currentCocktail.image} className="object-contain h-[60vh]"/>
            </div>
            
            <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
                <div ref={contentRef} className="space-y-4 lg:translate-y-20">
                    <p>Recipe for:</p>
                    <p id="title" className='font-modern-negra md:text-6xl text-3xl text-yellow max-w-40'>{currentCocktail.name}</p>
                </div>
                
                <div className="details space-y-5 md:max-w-md text-left">
                    <h2 className='md:text-5xl text-3xl font-serif'>{currentCocktail.title}</h2>
                    <p className='md:text-lg pe-5'>{currentCocktail.description}</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Menu