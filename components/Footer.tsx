import Image from 'next/image';
import Link from 'next/link';

import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-5 border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* CarHub Logo and Info */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.svg"
              alt="CarHub logo" 
              width={118} 
              height={18} 
              className="object-contain" 
            />
            <p className="text-gray-600 max-w-xs">
              CarHub 2023<br />
              All rights reserved ©
            </p>
          </div>

          {/* Footer Links - All in one line */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h3 className="font-bold text-gray-900 text-lg">{section.title}</h3>
                <div className="flex flex-col gap-2">
                  {section.links.map((item) => ( 
                    <Link
                      key={item.title}
                      href={item.url}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              @2025 CarHub. All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
