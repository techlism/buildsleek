"use client";
import { BuildingIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { CTAButton } from "./CTA";
import DarkModeSwitch from "./DarkModeSwitch";
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
		<nav className="sticky top-4 z-50 max-w-[97%] mx-auto rounded-xl  border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center xl:justify-start 2xl:justify-start lg:justify-start md:justify-start justify-between h-16 space-x-4">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link href={"/"}>
								<BuildingIcon />
							</Link>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{/* <Button  className="font-medium" variant={'link'}>Home</Button> */}
								<Button variant={"link"} onClick={() => scrollTo("about")}>
									About
								</Button>
								<Button variant={"link"} onClick={() => scrollTo("services")}>
									Services
								</Button>{" "}
								<CTAButton variant={"link"} message="Get Started" />
							</div>
						</div>
					</div>
					{/* <DarkModeSwitch /> */}
					<div className="flex items-center">
						<div className="-mr-2 flex md:hidden">
							<Button
								onClick={toggleNavbar}
								type="button"
								className="inline-flex items-center justify-center p-2 transition"
								variant={"outline"}
							>
								<span className="sr-only">Open main menu</span>{" "}
								{/*For accessibility*/}
								{!isOpen ? <Menu /> : <X />}
							</Button>
						</div>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden transition-slow">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="/about"
							className="  px-3 py-2 rounded-lg text-sm font-medium block hover:underline"
						>
							About
						</Link>
						<Link
							href="#"
							className="  px-3 py-2 rounded-lg text-sm font-medium block hover:underline"
						>
							Features
						</Link>
						<Link
							href="/report"
							className="  px-3 py-2 rounded-lg text-sm font-medium block"
						>
							Report an issue
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
