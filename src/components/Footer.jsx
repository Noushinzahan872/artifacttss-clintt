import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaSquareYoutube } from 'react-icons/fa6';
import { MdOutlineHistoryEdu } from 'react-icons/md';

const Footer = () => {
    return (
        <div>
         <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
					
				</div>

				<div className='flex'>
					<span className='text-4xl text-pink-500'><MdOutlineHistoryEdu /></span>
				<h2 className="text-2xl font-extrabold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Artifactum
        </h2>
				</div>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-bold text-pink-600">Product</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase font-bold text-pink-600">Company</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase font-bold text-pink-600">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase font-bold text-pink-600">Social media</div>
				<div className="flex justify-start space-x-3">
					 <a target="_blank" href="https://web.facebook.com/Noushin Zahan/"><FaFacebook className='h-10px'></FaFacebook></a>

      <a target="_blank"  href="https://www.youtube.com/@NOUSHINZAHAN"><FaSquareYoutube></FaSquareYoutube></a>

      <a target="_blank" href="https://www.linkedin.com/in/noushinjahan"><FaLinkedinIn></FaLinkedinIn></a>

      <a target="_blank" href="https://github.com/Noushinzahan872"><FaGithub></FaGithub></a>

				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-600">© 1989 Company Co. All rights reserved.</div>
</footer>
        </div>
    );
};

export default Footer;