
import { Github, Instagram, Mail, MessageSquareMore, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-[#14151D] text-white w-full py-10 flex justify-center items-center">
      <div className="text-center space-y-6 font-semibold">
        <p className="text-lg text-gray-300">
          © 2025 Vivek Sankar. All rights reserved.
        </p>
        <p className="text-lg text-gray-300">
          Made with ❤️ using Next.js and Tailwind CSS
        </p>

        <div className="space-y-3">
          <p className="text-lg text-gray-300">Follow me on</p>
          <div className="flex justify-center items-center gap-6">
            <a href="tel:+91 9025138965"  className="hover:text-[#00CAEE] ">
              <Phone />
            </a>
            <Link href="sms:+91 9025138965" aria-label="Message" className="hover:text-[#00CAEE] transition cursor-pointer">
              <MessageSquareMore />
            </Link>
            <Link href="mailto:your@email.com" aria-label="Email" className="hover:text-[#00CAEE] transition cursor-pointer">
              <Mail />
            </Link>
            <Link href="https://www.instagram.com/viveksankar5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#00CAEE] transition cursor-pointer">
              <Instagram />
            </Link>
            <a
  href="https://wa.me/919025138965"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Whatsapp"
  className="hover:text-[#00CAEE] transition cursor-pointer text-2xl"
>
  <FaWhatsapp />
</a>

            <Link
            className='hover:text-[#00CAEE] transition cursor-pointer'
  href="https://github.com/viveksankar20"
  target="_blank"
  rel="noopener noreferrer"
>
  <Github />
</Link>
{/* service_hrbxoh2 */}
          </div>
        </div>

        <p className="text-lg text-gray-300">Designed by Vivek Sankar</p>
      </div>
    </footer>
  );
}

export default Footer;
