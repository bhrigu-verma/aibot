//accertinity imports
"use client"
import { GlareCard } from "@/components/ui/glare-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
//accertinity imports
// import Typewriter from 'typewriter-effect';
import NavBar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Layout from './layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  const woords=[
    {text:" Want",},
    {text:" to",},
    {text:" integrate ",},
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    }, {text:" in your",},{text:" website",},
  ]
  const words = [
    {
      text: "Agent ",
    },
    
   
    {
      text: "Acumen",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
   <div>
    {/* <Layout>
      <Suspense fallback={<div>Loading Navbar...</div>}> */}
    <main>

   <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="  flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-200">
        ACUMEN AI 
      </div>
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-400 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <Link href="/home">Home</Link>
        <Link href="/home">Pricing</Link>
        <Link href="/documentation">Documentation</Link>
        <Link href="/home">Features</Link>
        <Link href="/home">Contact us</Link>
      </ul>
    
      <Link
        href="/dashboard"
        className="bg-orange px-4 py-2 rounded-sm text-white"
      >
        Free Trial
      </Link>
    </div>
        
    <section>
      <div className="flex select-none mt-10 ">
      <div className="w-[60%]  height-full">
        
        <div className="text-zinc-300 top-5 mt-[50px] ml-5 text-[95px] gap-1 font-bold">Your own AI 
           <TypewriterEffectSmooth words={words} /></div>
        <p className='text-zinc-300 top-5 mt-5 ml-5 text-lg font-medium'>Want to Integrate AI in your  <Typewriter
          words={['Wordpress','html','Reactjs','NextApp']}
          loop={false}
          cursor
          cursorStyle='_'
          typeSpeed={50}
          deleteSpeed={45}
          delaySpeed={1000}
        /> website? It's now a click away.</p>
        <button className="w-40 m-6 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
      <div className="w-[40%] mt-10">
      <GlareCard className="flex flex-col items-center justify-center">

      <p className="text-white font-bold  text-[40px] mt-4">Acumen Ai</p>
    </GlareCard>
    
      </div></div>
    </section>
    <section className="flex mt-[15vw] justify-center">
      <div><p>hello </p></div>


    </section>
{/* 
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If you're not ready to commit you can get started for free.
        </p>
      </section> */}
      {/* <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card> 
         ))}
      </div> */}
      </main>
     {/* </Suspense> 
    
     </Layout>*/}  </div>  
  );
}
