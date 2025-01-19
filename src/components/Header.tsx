import '../css/Header.css';

function Header() {

    const navList: string[] = ['Home', 'About', 'Projects', 'Resume'];
    return (
        <>
            <div className="header flex sticky top-0 m-3">
                <h3 className='p-3 text-foreground'> Sp</h3>
                <nav className='ml-auto'>
                    <ul className='flex p-3'>
                        {navList.map((item, index) => {
                            return <li key={index} className='ml-2 mr-2 text-foreground'>{item}</li>
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
