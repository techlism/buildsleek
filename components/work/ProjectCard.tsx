import type { Project } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "./DeviceFrames";

type ProjectCardProps = {
	project: Project;
	priority?: boolean;
	featured?: boolean;
};

export default function ProjectCard({
	project,
	priority,
	featured,
}: ProjectCardProps) {
	return (
		<Link
			href={`/work/${project.slug}`}
			className={`group glass-surface flex flex-col overflow-hidden rounded-2xl ${featured ? "lg:grid lg:grid-cols-[1.45fr_1fr]" : ""} transition-colors hover:border-primary/50`}
		>
			<div className="relative px-6 pt-6 pb-10 md:px-8 md:pt-8">
				<div
					className="pointer-events-none absolute inset-0 opacity-25"
					style={{
						backgroundImage:
							"linear-gradient(rgba(5, 109, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 109, 255, 0.3) 1px, transparent 1px)",
						backgroundSize: "24px 24px",
						maskImage:
							"radial-gradient(ellipse at center, black 30%, transparent 75%)",
					}}
				/>
				<div className="relative">
					<BrowserFrame
						src={project.cover.src}
						alt=""
						url={project.cover.url}
						priority={priority}
						sizes="(min-width: 1024px) 40vw, 90vw"
					/>
					<PhoneFrame
						src={project.coverMobile.src}
						alt=""
						statusBar={project.coverMobile.statusBar}
						sizes="120px"
						className="absolute -bottom-6 right-2 w-[22%] min-w-[78px] max-w-[130px] md:right-4"
					/>
				</div>
			</div>
			<div
				className={`flex flex-1 flex-col gap-3 border-t border-primary/15 p-6 md:p-8 ${featured ? "lg:justify-center lg:border-t-0 lg:border-l lg:p-10" : ""}`}
			>
				<div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
					<span className="rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-primary">
						{project.category}
					</span>
					<span className="text-foreground/55">{project.year}</span>
				</div>
				<h3
					className={`flex items-start justify-between gap-3 font-bold leading-tight ${featured ? "text-2xl lg:text-4xl" : "text-2xl"}`}
				>
					{project.name}
					<ArrowRight aria-hidden="true"
						className="mt-1 h-6 w-6 shrink-0 text-primary transition-transform duration-200 group-hover:-rotate-45" />
				</h3>
				<p className="text-base font-medium leading-relaxed text-foreground/75">
					{project.tagline}
				</p>
				{featured && (
					<ul className="mt-2 hidden space-y-2 text-sm font-medium text-foreground/80 lg:block">
						{project.services.map((service) => (
							<li key={service}><span aria-hidden="true">-&gt;</span> {service}</li>
						))}
					</ul>
				)}
			</div>
		</Link>
	);
}
