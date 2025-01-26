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
            <section className="intro flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
                <div className="flex-1 flex flex-col items-start space-y-4 p-[5%]">
                    <p className='text-xl'>Hi There! 👋</p>
                    <p className='text-xl font-bold'>I'M <span className="text-purple-500">Suraj Penugonda</span></p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={ComputerMan} className="h-full w-full max-w-sm object-cover" alt="man image" />
                </div>
            </section>
            <section className="self-intro text-foreground flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16">
                <div className='flex-1 flex flex-col items-start space-y-4 p-[5%]'>
                    <p className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
                        LET ME <span className="text-purple-500">INTRODUCE</span> MYSELF
                    </p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
                    </p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        I am fluent in classics like <span className="text-purple-500">C++, Javascript and Go.</span>
                    </p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        My field of Interest's are building new <span className="text-purple-500">Web Technologies and Products</span> and also in areas related to <span className="text-purple-500">Blockchain.</span>
                    </p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        Whenever possible, I also apply my passion for developing products with <span className="text-purple-500">Node.js</span> and Modern Javascript Library and Frameworks like <span className="text-purple-500">React.js and Next.js</span>
                    </p>
                </div>
                <div className="flex-1 flex justify-center">
                    <img src={ComputerMan} className="h-32 w-32 rounded-full" alt="profile image" />
                </div>
            </section>
            <section className="self-intro text-foreground flex flex-col items-center space-y-4">
                <div className='flex flex-col gap-1 py-8 md:py-10 lg:py-12 p-[5%] items-center'>
                    <p className='text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]'>
                        FIND ME <span className="text-purple-500">ON</span>
                    </p>
                    <p className='max-w-2xl text-lg font-light text-foreground'>
                        Feel free to connect with me
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-purple-500">GitHub</a>
                        <a href="#" className="text-purple-500">Twitter</a>
                        <a href="#" className="text-purple-500">LinkedIn</a>
                        <a href="#" className="text-purple-500">Instagram</a>
                    </div>
                </div>
            </section>
        </>
    );
}


export default HomePage;