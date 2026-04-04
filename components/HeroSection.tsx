import React from "react";
import { CTAButton } from "./CTA";
import { Button } from "./ui/button";
import Link from "next/link";
function Hero() {
	return (
		<div className="glass-surface rounded-2xl w-full min-h-[55vh] m-auto px-6 py-10 md:px-10 md:py-14">
			<div className="max-w-4xl mx-auto reveal-up">
				<p className="inline-flex items-center rounded-full border border-primary/20 px-3 py-1 text-xs md:text-sm font-semibold text-primary bg-background/70">
					BuildSleek for growing businesses
				</p>
				<h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
					Simple, reliable software for web, mobile, and AI.
				</h1>
				<p className="text-base md:text-lg mt-5 font-medium text-foreground/75 max-w-2xl">
					We help you launch faster, reduce manual work, and build digital products
					that people enjoy using.
				</p>
			</div>
			<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center reveal-up reveal-delay-1 max-w-4xl mx-auto">
				<CTAButton className="px-6" message="Talk to us for free" />
				<Button variant="outline" className="rounded-xl px-6 py-6 border-primary/20 text-foreground/90" asChild>
					<Link href="#services">Explore services</Link>
				</Button>
			</div>
			<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-foreground/70 reveal-up reveal-delay-2 max-w-4xl mx-auto">
				<div className="rounded-lg border border-border/70 px-3 py-2 bg-background/60">Quick start with a clear timeline</div>
				<div className="rounded-lg border border-border/70 px-3 py-2 bg-background/60">Regular updates, no confusion</div>
				<div className="rounded-lg border border-border/70 px-3 py-2 bg-background/60">Built to scale as you grow</div>
			</div>
		</div>
	);
}

export default function HeroSection() {
	return (
		// bg-[url('/bg.avif')] bg-contain bg-no-repeat bg-center
		<section className="relative w-full grid-pattern h-screen flex items-center justify-center px-6 overflow-hidden">
			<div className="relative w-full">
				<Hero />
			</div>
		</section>
	);
}
