"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Navlinks from "./Navlinks";
import { toast } from "react-toastify";
import userAvatar from "@/assets/user-avatar.png";


const Navbar = () => {

  const { data: session, isPending } = authClient.useSession();
  console.log(session);

  const user = session?.user;

  const links = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "All Tiles",
      href: "/all-tiles"
    },
    {
      name: "My Profile",
      href: "/my-profile"
    }
  ]

  return (

    <div className="relative">
      <div className="absolute top-0 left-0 right-0 w-9/12 mx-auto rounded-b-lg z-10  navbar bg-white/40 shadow-sm">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white/60 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {
                links.map((link, index) => (
                  <li key={index} >
                    <Navlinks href={link.href} >
                        {link.name}
                    </Navlinks>
                      
                  </li>
                ))
              }
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
                links.map((link, index) => (
                  <li key={index} className="md:text-sm font-semibold mr-4">
                    <Navlinks href={link.href} >
                        {link.name}
                    </Navlinks>
                      
                  </li>
                ))
              }
          </ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
           <span className="loading loading-spinner loading-xs"></span>
          ) : !user ? (
            <Link href="/login" className="btn border-4 hover:bg-black bg-white/70 hover:text-white transition duration-300">
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 rounded-full">
                 <Image className="rounded-full h-10 w-10" src={ user?.image || userAvatar} alt="user avatar" height={20} width={20}/>
                </div>
               
                  <Link
                    onClick={async () => {
                      const { error } = await authClient.signOut();
                      if (error) {
                        toast.error("Error logging out: " + error.message);
                      } else {
                        toast("Logged out successfully!");
                      }
                    }
                  
                    }
                    href="/login" className="btn border-4 hover:bg-black bg-white/70 hover:text-white transition duration-300">
              Logout
            </Link>
              </div>
             )}
        
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
