import { Link } from "react-router";

function Header() {

    type NavItem = {
        route: string;
        name: string;
    };
    const navList: NavItem[] = [{ route: '/', name: 'Home' }, { route: '/about', name: 'About' }, { route: '/projects', name: 'Projects' }, { route: '/resume', name: 'Resume' }]

    return (
        <>
            <div className="header flex sticky top-0 m-3">
                <h3 className='p-3 text-foreground'> Sp</h3>
                <nav className='ml-auto'>
                    <ul className='flex p-3'>
                        {navList.map(({route, name}, index) => {
                            return <li key={index} className='ml-2 mr-2 text-foreground'>
                                <Link
                                    to={route}
                                >
                                {name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header
