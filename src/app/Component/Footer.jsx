

import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About DevMeetup</h3>
            <p className="text-gray-400">
              DevMeetup is a global community of developers coming together to learn, share, and grow. 
              Join us for exciting events, workshops, and networking opportunities.
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://t.me/codenightforum/4791" className="text-gray-400 hover:text-white">
                <FaTelegram className="w-6 h-6" />
              </Link>
            </div>
          </div>

         
                
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevMeetup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;