import '@/css/HomePage.css';
import ComputerMan from '@/assets/computer.png';
import { useEffect, useState } from 'react';

function HomePage() {

    const differentTexts: string[] = ['Software Developer', 'Full Stack Developer', 'FrontEnd Developer', 'Backend Developer'];
    const [showText, setShowText] = useState(differentTexts[0])
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(differentTexts[number % differentTexts.length])
            setNumber(number+1)
        }, 3000)
        return () => clearInterval(interval);
    }, [number]);
    


    return (
        <>
            <section className="intro">
                <div className="flex ">
                    <div className='flex-1 content-center'>
                        <p className='text-xl text-center'>  Hi, There 👋</p>
                        <p className='text-xl text-center'>  I'm Suraj Penugonda </p>
                        <p className='pl-50 text-2xl text-center typewriter'> {showText} </p>
                    </div>
                    <div className='flex-1 justify-items-center'>
                        <img src={ComputerMan} className="h-full w-full object-cover computer-man" alt=" man image" />        
                    </div>
                </div>
            </section>
            <section className="self-intro text-foreground">
                <div className='flex flex-col items-start p-[5%]'>
                    <p className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>LET ME INTRODUCE MYSELF</p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        Full Stack Developer with expertise in React.js, Node.js, and AWS. Passionate about building scalable applications and exploring new technologies.
                    </p>
                </div>
            </section>
            <section className="self-intro text-foreground">
                <div className='flex flex-col gap-1 py-8 md:py-10 lg:py-12 p-[5%] items-center'>
                    <p className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>FIND ME ON</p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                    Feel free to connect with me
                    </p>
                </div>
            </section>
        </>)
}


export default HomePage;