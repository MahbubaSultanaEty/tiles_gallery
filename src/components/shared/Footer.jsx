import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="w-11/12 mx-auto py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            Tile<span className="text-primary">Gallery</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed text-sm">
            Discover premium tile collections crafted for modern,
            elegant, and timeless interiors.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
           
              <FaFacebookF size={18} />
           
              <BsInstagram size={18} />
           
              <BsTwitter size={18} />
            
              <LiaLinkedin size={18} />
           
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tiles"
                className="hover:text-primary transition"
              >
                All Tiles
              </Link>
            </li>

            <li>
              <Link
                href="/profile"
                className="hover:text-primary transition"
              >
                My Profile
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-primary transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Collections */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Collections
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-primary transition cursor-pointer">
              Marble Tiles
            </li>

            <li className="hover:text-primary transition cursor-pointer">
              Ceramic Tiles
            </li>

            <li className="hover:text-primary transition cursor-pointer">
              Wooden Finish
            </li>

            <li className="hover:text-primary transition cursor-pointer">
              Mosaic Designs
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1" />

              <p>Chandpur, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />

              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />

              <p>support@tilegallery.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 TileGallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;