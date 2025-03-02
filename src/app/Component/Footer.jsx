import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About DevMeetup</h3>
            <p className="text-sm">
              DevMeetup is a community of developers who come together to share knowledge, network, and collaborate on projects. Join us to stay updated with the latest trends in technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white">Events</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/developer-meetup" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/devmeetup-et/" className="text-gray-400 hover:text-white">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link href="https://t.me/codenightforum/4791" className="text-gray-400 hover:text-white">
                <FaTelegram className="w-6 h-6" />
              </Link>
              <Link href="https://twitter.com/devmeetup" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://facebook.com/devmeetup" className="text-gray-400 hover:text-white">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com/devmeetup" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} DevMeetup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;