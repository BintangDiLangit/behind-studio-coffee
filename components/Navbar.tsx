"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar({ className }: { className: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b font-helvetica-neue font-medium ${className} bg-gray-50`}
    >
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="#about"
              scroll={true}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              scroll={true}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#project"
              scroll={true}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Project
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-start md:justify-center">
            <Link href="/" className="font-bold text-xl">
              <Image
                src="/behind_logo.svg"
                alt="logo behind"
                width={100}
                height={50}
              />
            </Link>
          </div>

          {/* Right section - for symmetry on desktop */}
          <div className="hidden md:flex items-center ml-auto ">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
            >
              HELLO@BEHIND.COM
            </Link>
          </div>

          {/* Placeholder div for mobile layout balance */}
          {/* <div className="flex md:hidden w-8"></div> */}

          {/* Mobile Nav */}
          <div className="md:hidden md:flex items-center ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden",
            "transition-all duration-300 ease-in-out ",
            isOpen ? "max-h-64" : "max-h-0",
            "overflow-hidden"
          )}
        >
          <div className="px-4 pt-2 pb-3 text-right space-y-1 bg-white/80 backdrop-blur-md">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#project"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              Project
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              HELLO@BEHIND.COM
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
