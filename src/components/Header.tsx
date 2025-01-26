import { Link } from "react-router";
import { useTheme } from "@/context/ThemeContext";

function Header() {
    const { isDarkTheme, toggleTheme } = useTheme();

    type NavItem = {
        route: string;
        name: string;
    };
    const navList: NavItem[] = [{ route: '/', name: 'Home' }, { route: '/about', name: 'About' }, { route: '/projects', name: 'Projects' }, { route: '/resume', name: 'Resume' }]

    return (
        <>
            <div className={`header flex flex-col sm:flex-row sticky top-0 m-3 ${isDarkTheme ? 'dark' : ''}`}>
                <h3 className='p-3 text-foreground'> Sp</h3>
                <nav className='ml-auto'>
                    <ul className='flex flex-col sm:flex-row p-3'>
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
                <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 rounded">
                    Toggle Theme
                </button>
            </div>
        </>
    )
}

export default Header
