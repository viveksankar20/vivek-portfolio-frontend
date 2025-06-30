import './globals.css' 
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vivek Sankar | MERN Stack Developer Portfolio',
  description: 'Portfolio of Vivek Sankar, a skilled MERN Stack Developer. Explore projects, skills, and experience in full-stack web development.',
  keywords: [
    'Vivek Sankar',
    'MERN Stack',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Portfolio',
    'Web Developer'
  ],
  openGraph: {
    title: 'Vivek Sankar | MERN Stack Developer Portfolio',
    description: 'Portfolio of Vivek Sankar, a skilled MERN Stack Developer. Explore projects, skills, and experience in full-stack web development.',
    url: 'https://your-portfolio-url.com', // Replace with your actual URL
    siteName: 'Vivek Sankar Portfolio',
    images: [
      {
        url: '/0K8A0785-removebg-preview.png', // Replace with your best image
        width: 800,
        height: 600,
        alt: 'Vivek Sankar Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Sankar | MERN Stack Developer Portfolio',
    description: 'Portfolio of Vivek Sankar, a skilled MERN Stack Developer.',
    images: ['/0K8A0785-removebg-preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#02091e]`}>
      {/*  bg-transparent */}
      
        {children}
   
        </body>
    </html>
  )
}
