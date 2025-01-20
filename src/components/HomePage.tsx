import '@/css/HomePage.css';
import ComputerMan from '@/assets/computer.png';
import Title from '@/components/Title';
import { useEffect, useState } from 'react';

function HomePage() {

    const differentTexts: string[] = ['Software Developer', ' ',  'Full Stack Developer', ' ', 'FrontEnd Developer', ' ', 'Backend Developer', ' '];
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
                        <p  className={'pl-56 typewriter text-2xl text-center inline ' + (showText.length > 0 ? 'playing': 'stopped') }> {showText} </p>
                    </div>
                    <div className='flex-1'>
                        <img src={ComputerMan} className="h-full w-full object-cover" alt="" />        
                    </div>
                </div>
            </section>
            <section className="self-intro text-foreground">
                LET ME INTRODUCE MYSELF
                Full Stack Developer with expertise in React.js, Node.js, and AWS. Passionate about building scalable applications and exploring new technologies.
            </section>
            <section className="find-me text-foreground">
                FIND ME ON
                Feel free to connect with me
            </section>
        </>)
}


export default HomePage;