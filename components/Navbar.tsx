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

  const navItems = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      event.preventDefault();
      document.getElementById(href.slice(2))?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
      setIsOpen(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav aria-label="Main" className="glass-surface sticky top-6 z-50 w-full rounded-2xl max-w-7xl mx-auto reveal-up">
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
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant={"link"}
                    asChild
                    className="text-base font-medium text-foreground/85 hover:text-primary"
                  >
                    <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                      {item.label}
                    </Link>
                  </Button>
                ))}
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
              className="inline-flex items-center justify-center p-2 transition-all border-primary/20"
              variant={"outline"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {!isOpen ? <Menu size={20} /> : <X size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden mt-2 px-3 pb-3 reveal-up">
          <div className="glass-surface rounded-xl px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={"link"}
                asChild
                className="block w-full text-left text-base font-medium text-foreground/90 hover:text-primary hover:bg-primary/10 rounded-lg px-3 py-2"
              >
                <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                  {item.label}
                </Link>
              </Button>
            ))}
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
