import React from "react";
import { CTAButton } from "./CTA";
function Hero() {
	return (
		// <div className="flex flex-col justify-center items-center h-screen max-w-7xl mx-auto text-center rounded-lg p-4">			
			<div className="bg-clip-padding backdrop-filter rounded-lg border-1.5 border backdrop-blur-md bg-glassmorphic w-full h-[50%] m-auto flex justify-center flex-col items-center">
				<div className="text-center">
					<h1 className="text-xl md:text-4xl lg:text-5xl xl:text-5xl font-medium">
						<span className="text-2xl md:text-3xl lg:text-6xl xl:text-6xl">
							Elevate
						</span>{" "}
						your digital presence with
					</h1>
					<h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-7xl font-bold mt-2 text-primary">
						BuildSleek
					</h1>
				</div>
				<div>
					<p className="text-base  mt-4 font-medium">
						Innovative Software Solutions for Forward-Thinking Businesses
					</p>
				</div>
				<div className="mt-4">
					<CTAButton className="px-6" message="Get in touch"/>
				</div>
			</div>
		// </div>
	);
}

export default function HeroSection() {
	return (
		// bg-[url('/bg.avif')] bg-contain bg-no-repeat bg-center
		<section className="w-full grid-pattern h-screen flex items-center justify-center px-6">
			<Hero />
		</section>
	);
}
