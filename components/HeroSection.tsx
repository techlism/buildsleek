import React from "react";
import { CTAButton } from "./CTA";
import { Spotlight } from "./ui/spotlight";
function Hero() {
	return (
		<div className="flex flex-col justify-center items-center min-h-[93vh] max-w-6xl mx-auto p-4 text-center">
			<div>
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
				<p className="text-gray-400 text-sm md:text-md lg:text-base xl:text-base mt-1">
					Innovative Software Solutions for Forward-Thinking Businesses
				</p>
			</div>
			<div className="m-4">
				<CTAButton />
			</div>
		</div>
	);
}

export default function HeroSection() {
	return (
		<section className="w-full">
			<Spotlight fill="teal" className="-top-40 left-0 md:left-60 md:-top-20" />
			<Hero />
		</section>
	);
}
