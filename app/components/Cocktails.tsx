import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Cocktails = () => {
  const cocktailLists = [
    {
      name: "Chapel Hill Shiraz",
      country: "AU",
      detail: "Battle",
      price: "$10",
    },
    {
      name: "Caten Malbee",
      country: "AU",
      detail: "Battle",
      price: "$49",
    },
    {
      name: "Rhino Pale Ale",
      country: "CA",
      detail: "750 ml",
      price: "$20",
    },
    {
      name: "Irish Guinness",
      country: "IE",
      detail: "600 ml",
      price: "$29",
    },
  ];

    const mockTailLists = [
    {
      name: "Tropical Bloom",
      country: "US",
      detail: "Battle",
      price: "$10",
    },
    {
      name: "Passionfruit Mint",
      country: "US",
      detail: "Battle",
      price: "$49",
    },
    {
      name: "Citrus Glow",
      country: "CA",
      detail: "750 ml",
      price: "$20",
    },
    {
      name: "Lavender Fizz",
      country: "IE",
      detail: "600 ml",
      price: "$29",
    },
  ];

  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#cocktails',
      start: 'top 30%',
      end: 'bottom 80%',
      scrub: true,
    }
    })
    
    parallaxTimeline
    .from('#c-left-leaf', {
      x: -100, y: 100
    })
    .from('#c-right-leaf', {
      x: 100, y: 100
    })
  })

  return (
	<section id="cocktails" className="noisy relative min-h-dvh w-full overflow-hidden">
    <img src="./images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" className='absolute left-0 md:bottom-0 md:top-auto bottom-0 md:w-fit w-1/3'/>
    <img src="./images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" className='absolute right-0 md:bottom-0 md:top-auto bottom-0 md:w-fit w-1/3'/>
    
    <div className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-40 2xl:px-0 px-5">
      <div className="space-y-8 w-full md:w-fit">
        <h2 className='text-xl font-medium'>Most popular cocktails:</h2>
        
        <ul className='space-y-8'>
          {cocktailLists.map(({ name, country, detail, price }) => (
          <li key={name} className='flex justify-between items-start'>
            <div className="md:me-28">
              <h3 className='font-modern-negra 2xl:text-3xl text-xl text-yellow'>{name}</h3>
              <p className='text-sm'>{country} | {detail}</p>
            </div>
            <span className='text-xl font-medium'>- {price}</span>
          </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-8 w-full md:w-fit pb-20 md:pb-0">
        <h2 className='text-xl font-medium'>Most loved mocktails:</h2>
        
        <ul className='space-y-8'>
          {mockTailLists.map(({ name, country, detail, price }) => (
          <li key={name} className='flex justify-between items-start'>
            <div className="me-28">
              <h3 className='font-modern-negra 2xl:text-3xl text-xl text-yellow'>{name}</h3>
              <p className='text-sm'>{country} | {detail}</p>
            </div>
            <span className='text-xl font-medium'>- {price}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
	</section>
  )
}

export default Cocktails