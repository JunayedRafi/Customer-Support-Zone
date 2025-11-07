import React from 'react';

const Navbar = () => {
    return (
        <div className=" bg-white">
            <div className="navbar mx-auto max-w-[1200px]">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        </ul>
                    </div>
                        <a className="btn items-center text-white bg-gradient-to-br bg-linear-30 from-[#632EE3] to-[#9F62F2]">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33333 5.33333H5.33333V9.33333H4V5.33333H0V4H4V0H5.33333V4H9.33333V5.33333Z" fill="white"/></svg> New Ticket</a>
                </div>  
            </div>
        </div>
    );
};

export default Navbar;