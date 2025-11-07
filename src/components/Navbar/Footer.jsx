import React from 'react';
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav className='w-1/5'>
                <h6 className="footer-title text-white">CS — Ticket System</h6>
                <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </nav>
            <nav className='w-1/5'>
                <h6 className="footer-title text-white">Company</h6>
                <a className="link link-hover text-[#A1A1AA]">About Us</a>
                <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
                <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
            </nav>
            <nav className='w-1/5'>
                <h6 className="footer-title text-white">Services</h6>
                <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
                <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
                <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
            </nav>
            <nav className='w-1/5'>
                <h6 className="footer-title text-white">Information</h6>
                <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
                <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
                <a className="link link-hover text-[#A1A1AA]">Join Us</a>
            </nav>
            <nav className='w-1/5'>
                <h6 className="footer-title text-white">Social Links</h6>
                <a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a>
                <a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a>
                <a className="link link-hover text-[#A1A1AA]">@CS — Ticket System</a>
                <a className="link link-hover text-[#A1A1AA]">support@cst.com</a>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;