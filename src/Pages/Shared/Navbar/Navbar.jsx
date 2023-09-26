
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchModal from '../SearchNavbarItem/SearchModal';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


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
                <Link to={'/'} className="btn btn-ghost normal-case text-sm lg:text-xl">Book Shop</Link>
            </div>
            <div className="navbar-end lg:hidden">
                {/* <div className="  flex  items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-28 p-2 border rounded-md mr-2"
                    />
                    <button
                        className="bg-white text-blue-500 px-4 py-2 rounded-md"
                        onClick={openModal}
                    >
                        <BsSearch></BsSearch>
                    </button>
                </div>
                {isModalOpen && (
                    <SearchModal closeModal={closeModal} searchQuery={searchQuery} />
                )} */}

                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input w-4/5 input-bordered" />
                        <button
                            onClick={openModal}
                            className="btn btn-square bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    {isModalOpen && (
                        <SearchModal closeModal={closeModal} searchQuery={searchQuery} />
                    )}
                </div>

            </div>
            <div className="navbar-end hidden lg:flex">

                {/* <div className="  flex  items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-56 p-2 border rounded-md mr-2"
                    />
                    <button
                        className="bg-white text-blue-500 p-2 rounded-md"
                        onClick={openModal}
                    >

                        <BsSearch></BsSearch>
                    </button>
                </div>
                {isModalOpen && (
                    <SearchModal closeModal={closeModal} searchQuery={searchQuery} />
                )} */}
                <div className="form-control">
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Search…"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input input-bordered" />
                        <button
                            onClick={openModal}
                            className="btn btn-square bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                    {isModalOpen && (
                        <SearchModal closeModal={closeModal} searchQuery={searchQuery} />
                    )}
                </div>

                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>

            </div>

        </div>
    );
};

export default Navbar;