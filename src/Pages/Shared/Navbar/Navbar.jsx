
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li><Link to={'/login'}>SignIn</Link></li>
        <li><Link to={'/signup'}>Signup</Link></li>
    </>
    return (
        <div className="navbar bg-base-200 text-gray-600 text-inherit shadow-xl rounded-md mt-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Book Shop</Link>
            </div>
            <div className="navbar-end hidden lg:flex">

                <div className="flex items-center">

                    <input
                        type="text"
                        placeholder="Search Books"
                        className="input input-bordered rounded-r-none w-44"
                    />
                    <button
                        type="submit"
                        className=" w-3/12 px-2 rounded-r-xl h-12 bg-blue-500 text-white  hover:bg-blue-600"

                    >
                        <Link to='/search'>
                        Search
                        </Link>
                    </button>
                </div>
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>

        </div>
    );
};

export default Navbar;