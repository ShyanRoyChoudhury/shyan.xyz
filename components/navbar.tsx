'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const path = usePathname();
  const commonLinkClasses = "hover:text-accent transition-colors duration-300";
  const activeLinkClasses = "text-accent font-semibold";

  return (
    <nav className="flex sm:flex-col flex-row bg-secondary sm:bg-transparent border-b sm:border-none p-4 sm:p-0 sm:space-y-6 items-center sm:items-start w-full sm:w-auto">
      <div className="bg-primary p-3 rounded-lg shadow-lg max-w-xs sm:max-w-none sm:mb-6 flex items-center space-x-3">
        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-accent">
          <Image src={'/profileImage.jpg'} alt="profile pic" layout="fill" objectFit="cover" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Shyan Roy Choudhury</h3>
        </div>
      </div>
      <div className="flex flex-col space-y-3 text-left">
        <Link
          href={'/'}
          className={`${commonLinkClasses} ${
            path === '/' ? activeLinkClasses : 'text-slate-300'
          }`}
        >
          Home
        </Link>
        <Link
          href={'/blog'}
          className={`${commonLinkClasses} ${
            path === '/blog' ? activeLinkClasses : 'text-slate-300'
          }`}
        >
          Blog
        </Link>
        <Link
          href={'/work'}
          className={`${commonLinkClasses} ${
            path === '/work' ? activeLinkClasses : 'text-slate-300'
          }`}
        >
          Work
        </Link>
        <Link
          href={'/projects'}
          className={`${commonLinkClasses} ${
            path === '/projects' ? activeLinkClasses : 'text-slate-300'
          }`}
        >
          Projects
        </Link>
      </div>
      <div className="flex flex-col space-y-3 text-left mt-auto">
        <Link
          href={'/contact'}
          className={`${commonLinkClasses} ${
            path === '/contact' ? activeLinkClasses : 'text-slate-400'
          }`}
        >
          Contact
        </Link>
        <Link href={'https://github.com/ShyanRoyChoudhury'} className={`${commonLinkClasses} text-slate-400`}>Github</Link>
        <Link
              href={
                'https://www.linkedin.com/in/shyan-roy-choudhury-79a860198/'
              }
              className={`${commonLinkClasses} text-slate-400`}
            >
              LinkedIn
            </Link>
            <Link href={'https://twitter.com/kenobi8356'} className={`${commonLinkClasses} text-slate-400`}>X</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
