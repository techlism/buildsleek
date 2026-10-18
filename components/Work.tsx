import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProjectCard from "./work/ProjectCard";
import { Button } from "./ui/button";

export default function Work() {
	return (
		<section className="section-wrap" id="work">
			<div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal-up">
				<div className="max-w-2xl">
					<p className="text-sm font-semibold uppercase tracking-wider text-primary">Our work</p>
					<h2 className="mt-3 text-4xl font-bold md:text-5xl">
						Things we've built, <span className="font-serif italic text-primary">live</span> and in use.
					</h2>
					<p className="mt-5 text-lg leading-relaxed text-foreground/80">
						Real businesses, real users. Here's what they needed and how we built it.
					</p>
				</div>
				<Button variant="outline" className="rounded-xl border-primary/20 px-6 py-6 text-foreground/90" asChild>
					<Link href="/work">
						See all projects <ArrowRight className="ml-1 h-4 w-4" />
					</Link>
				</Button>
			</div>
			<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
				{projects.map((project, index) => (
					<div key={project.slug} className={`reveal-up ${index === 0 ? "lg:col-span-2" : ""}`}>
						<ProjectCard project={project} featured={index === 0} />
					</div>
				))}
			</div>
		</section>
	);
}
