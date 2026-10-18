import Footer from "@/components/Footer";
import ProjectCTA from "@/components/work/ProjectCTA";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Work",
	alternates: { canonical: "/work" },
	description:
		"Projects BuildSleek has designed, built and shipped: marketplaces, college websites, admin portals and more.",
	openGraph: {
		title: "Our Work | BuildSleek",
		description: "Projects BuildSleek has designed, built and shipped.",
		url: "/work",
		images: "/opengraph.png",
	},
};

export default function WorkPage() {
	return (
		<main className="flex flex-col items-center px-6" id="main">
			<section className="w-full pt-16 pb-12 md:pt-24">
				<div className="max-w-3xl reveal-up">
					<p className="inline-flex items-center rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-xs font-semibold text-primary md:text-sm">
						Our work
					</p>
					<h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
						Software that's out in the world,{" "}
						<span className="font-serif italic text-primary">
							doing its job
						</span>
						.
					</h1>
					<p className="mt-5 max-w-2xl text-base font-medium text-foreground/75 md:text-lg">
						Every project here is live and used every day. Open one to see what
						the client needed, what we built, and the decisions that made it
						work.
					</p>
				</div>
			</section>

			<section className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
				{projects.map((project, index) => (
					<div
						key={project.slug}
						className={`reveal-up ${index === 0 ? "lg:col-span-2" : ""}`}
					>
						<ProjectCard
							project={project}
							featured={index === 0}
							priority={index === 0}
						/>
					</div>
				))}
			</section>

			<ProjectCTA
				title="Your project could be next."
				description="Whether it's a website, an internal tool or a full platform, we'd love to hear about it. Tell us what you need and we'll reply with a clear plan."
			/>
			<Footer />
		</main>
	);
}
