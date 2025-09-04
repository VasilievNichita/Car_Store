import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo.svg"
              alt="logo" 
              width={118} height={18} className='object-contain' />
            <p className="text-base text-gray-700">
              CarHub 2023 <br />
              All rights reserved &copy;
            </p>
        </div>
          <div className="footer__links">
            {footerLinks.map((section) => (
              <div key={section.title} className="footer__link">
                <h3 className="font-bold">{section.title}</h3>
                {section.links.map((item) => ( 
                  <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500 hover:text-gray-700"
                  >
                  {item.title}
                </Link>
                ))}
              </div>
            ))}
          </div>
<div className="flex flex-col sm:flex-row justify-between items-center px-6 py-6">
  <p className="text-gray-500">
    @2025 CarHub. All Rights Reserved
  </p>

  <div className="flex gap-6 mt-4 sm:mt-0">
    <Link href="/" className="text-gray-500 hover:text-gray-700">
      Privacy Policy
    </Link>
    <Link href="/" className="text-gray-500 hover:text-gray-700">
      Terms of Use
    </Link>
  </div>
</div>

      </div>
    </footer>
  )
}

export default Footer
