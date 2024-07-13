//accertinity imports
"use client"
import { GlareCard } from "@/components/ui/glare-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];
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
   <div className="">
    {/* <Layout>
      <Suspense fallback={<div>Loading Navbar...</div>}> */}
    <main>

   <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="  flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-200">
        ACUMEN AI 
      </div>
      <ul className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative gap-5 justify-between self-stretch my-auto text-sm leading-5 text-neutral-400 max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
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
      <div className="flex select-none ">
      <div className="w-[60%]  height-full mt-10">
        
        <div className="text-zinc-300 top-5 md:mt-[60px] mt-[40px] md:ml-10 ml-5 text-[95px] gap-1 font-bold">Your own AI 
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
      <div className="w-[40%] mr-10 mb-3">
      {/* <GlareCard className="flex flex-col items-center justify-center">

      <p className="text-white font-bold  text-[40px] mt-4">Acumen Ai</p>
    </GlareCard> */}
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Add power and automation to your website  
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Ai addition is now just a click away comes with powerful monitoring
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/app-ui.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={30}
            as={Link}
            href="/signup"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={30}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    
      </div></div>
    </section>
    <section className="flex flex-col mt-[10vw] max-w-full h-full justify-center">
    <div className="text-center justify-center text-4xl font-bold flex ">Why choose <div className= "text-blue-500 dark:text-blue-500">AcumenAi</div> ?</div>
    <div className="p-10   bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_70%_at_60%_0%,#000_70%,transparent_100%)] ">
      <StickyScroll content={content} />
    </div>


    </section >
    {/* payment plans create a fomo free for first 100 registrations  */}
    <section className="flex flex-col  max-w-full h-full justify-center">
     <h1 className="text-center justify-center text-4xl font-bold flex " > Plans we Offer </h1>
    <h1 className="text-center justify-center text-lg font-medium flex"> currently offering free Ultimate plan for first 100 buinesses according to registered time</h1>
    </section>
{/* 
      <section className="flex justify-center items-center flex-col gap-4 mt-10">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If you're not ready to commit you can get started for free.
        </p>
      </section> */}
      <div className="flex p-6 justify-center gap-4 flex-wrap mt-6">
      
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
                className="bg-[#e69408] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card> 
         ))}
      </div> 
      </main>
     {/* </Suspense> 
    
     </Layout>*/}  </div>  
  );
}
