"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaBars as Menu, FaTimes as X } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center md:flex-row-reverse">
        {/* Logo/Text on the Left on Desktop */}

        {/* Navigation Menu on the Right on Desktop */}
        <nav className="hidden md:flex space-x-4  text-right">
          <Link href="/" onClick={() => setIsOpen(false)}className='hover:text-blue-600'>Home</Link>
          <Link href="/PastEvents" onClick={() => setIsOpen(false)} className='hover:text-blue-600'>PastEvents</Link>
          <Link href="/Event2" onClick={() => setIsOpen(false)}className='hover:text-blue-600'>Event 2</Link>
          <Link href="/Event3" onClick={() => setIsOpen(false)}className='hover:text-blue-600'>Event 3</Link>
        </nav>
        <div className="text-2xl font-bold text-blue-600">
          DevMeetUP
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/PastEvents" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>PastEvents</Link>
          <Link href="/Event2" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Event 2</Link>
          <Link href="/Event3" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Event 3</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
