"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CTAButton } from "./CTA";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-6 z-50 w-full rounded-lg border-1.5 border backdrop-blur-md bg-glassmorphic max-w-7xl mx-auto">
      <div className="px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  alt="BuildSleek"
                  width={35}
                  height={35} 
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-6">
                <Button 
                  variant={"link"} 
                  onClick={() => scrollTo("about")}
                  className="text-base font-medium"
                >
                  About
                </Button>
                <Button 
                  variant={"link"} 
                  onClick={() => scrollTo("services")}
                  className="text-base font-medium"
                >
                  Services
                </Button>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <CTAButton message="Start a free consultation" />
          </div>
          
          <div className="md:hidden">
            <Button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 transition-all"
              variant={"outline"}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu size={20} /> : <X size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 mt-2">
          <div className="px-6 py-4 space-y-3">
            <Button 
              onClick={() => scrollTo("about")} 
              variant={"link"}
              className="block w-full text-left text-base font-medium"
            >
              About
            </Button>
            <Button 
              onClick={() => scrollTo("services")} 
              variant={"link"}
              className="block w-full text-left text-base font-medium"
            >
              Services
            </Button>
            <div className="pt-2">
              <CTAButton message="Start a free consultation" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
