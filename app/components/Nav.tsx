import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Nav({}: Props) {
    const textStyle = {
        heading: "Ubuntu, sans-serif",
        sans: "Cabin, sans-serif",
        monospace: "Fira Code, monospace",
      };
  return (
    <nav className='bg-slate-950 text-white p-5'>
        <div className="container mx-auto">
        <div className='flex justify-between items-center'>
            <div>
                <Link href="/">Home</Link>
            </div>
            <ul className='flex'>
                <li className='mx-3'><Link href="/login">Sign In</Link></li>
                <li className='mx-3'><Link href="/register">Sign Up</Link></li>
            </ul>
        </div>
  </div>
    </nav>
  )
}