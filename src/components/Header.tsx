import { useState } from 'react'
import '../css/Header.css';


function Header() {

    const navList: string[] = ['Home', 'About', 'Projects', 'Resume'];
    return (
        <>
            <div className="header flex sticky top-0 m-3">
                <h3 className='p-3'> Sp</h3>
                <nav className='ml-auto'>
                    <ul className='flex p-3'>
                        {navList.map((item, index) => {
                            return <li key={index} className='ml-2 mr-2'>{item}</li>
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
