import React, { useEffect, useRef } from 'react'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilepic from "../../public/images/profile/123.png"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 2000})
const isInView = useInView(ref, {once: true});

useEffect(() =>{
if(isInView){
    motionValue.set(value);
}
},[isInView, value, motionValue])

useEffect(() =>{
    springValue.on("change", (latest) =>{
        if(ref.current && latest.toFixed(0.5) <= value){
            ref.current.textContent = latest.toFixed(0.5);
        }
    })
},[springValue, value])


    return <span ref={ref}></span>

    
}

const about = () => {
return (
    <>
        <Head>
            <title>Hadi Ramadhan | About Page</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout>
            <AnimatedText text="Hadi Ramadhan" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                        Biography
                    </h2>
                    <p className='my-2 font-medium'>
                        Hi Saya Hadi Ramadhan 🙌
                    </p>
                    <p className='my-2 font-medium' >
                        Saya Lulusan Tehnik Informatika 
                    </p>
                    <p className='my-2 font-medium'>
                        Saya Seorang Frontend Developer
                    </p>
                    <p className='my-2 font-medium'>
                        UI/UX Web Designer
                    </p>
                </div>


            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilepic} alt="HadiRamadhan" className="w-full h-auto rounded-2xl"
                priority
                sizes='(max-width: 768px) 100vw,
                (max-width: 1200px 50vw),
                33vw
                '
                
                />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center' >
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={25}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center
                md:text-lg 
                sm:text-base
                xs:text-sm
                '> 
                    My Age
                </h2>
                </div> 

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={4}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm'>
                    Projects 
                    Completed
                </h2>
                </div> 

            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                <AnimatedNumbers value={2022}/>
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                xl:text-center 
                md:text-lg 
                sm:text-base
                xs:text-sm'>
                college graduation
                </h2>
                </div> 

            </div>

            </div>

            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
)
}
export default about
