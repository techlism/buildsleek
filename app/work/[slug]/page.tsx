import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { BrowserFrame, PhoneFrame } from "@/components/work/DeviceFrames";
import ProjectCTA from "@/components/work/ProjectCTA";
import ProjectSpotlight from "@/components/work/ProjectSpotlight";
import { getProject, projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
	return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) return {};

	const title = `${project.name} Case Study`;
	return {
		title,
		description: project.summary,
		alternates: { canonical: `/work/${project.slug}` },
		openGraph: {
			title: `${title} | BuildSleek`,
			description: project.summary,
			url: `/work/${project.slug}`,
			type: "article",
			images: project.cover.src,
		},
	};
}

function SectionHeading({
	eyebrow,
	title,
}: { eyebrow: string; title: string }) {
	return (
		<div className="mb-6 max-w-2xl md:mb-8">
			<p className="text-sm font-semibold uppercase tracking-wider text-primary">
				{eyebrow}
			</p>
			<h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
				{title}
			</h2>
		</div>
	);
}

export default async function ProjectPage({ params }: PageProps) {
	const { slug } = await params;
	const project = getProject(slug);
	if (!project) notFound();

	const index = projects.findIndex((p) => p.slug === project.slug);
	const next = projects[(index + 1) % projects.length];
	const [heroPhone, ...otherPhones] = project.mobileScreens;

	return (
		<main className="flex flex-col items-center px-6" id="main">
			{/* Intro */}
			<section className="w-full pt-12 md:pt-16">
				<Link
					href="/work"
					className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
				>
					<ArrowLeft className="h-4 w-4" /> All projects
				</Link>
				<div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end reveal-up">
					<div>
						<div className="flex flex-wrap items-center gap-2 text-xs font-semibold md:text-sm">
							<span className="rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-primary">
								{project.category}
							</span>
							<span className="text-foreground/55">{project.year}</span>
						</div>
						<h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
							{project.name}
						</h1>
						<p className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
							{project.summary}
						</p>
					</div>
					<dl className="glass-surface grid grid-cols-2 gap-x-6 gap-y-5 rounded-2xl p-6 text-sm">
						<div>
							<dt className="font-semibold text-foreground/55">Client</dt>
							<dd className="mt-1 font-bold">{project.client}</dd>
						</div>
						<div>
							<dt className="font-semibold text-foreground/55">Live at</dt>
							<dd className="mt-1">
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
								>
									{project.liveLabel} <ArrowUpRight className="h-3.5 w-3.5" />
								</a>
							</dd>
						</div>
						<div className="col-span-2">
							<dt className="font-semibold text-foreground/55">What we did</dt>
							<dd className="mt-2 flex flex-wrap gap-2">
								{project.services.map((service) => (
									<span
										key={service}
										className="rounded-lg border border-border/70 bg-background/60 px-2.5 py-1 font-semibold text-foreground/80"
									>
										{service}
									</span>
								))}
							</dd>
						</div>
					</dl>
				</div>
			</section>

			{/* Hero visual */}
			<section className="relative w-full pt-10 pb-12 md:pt-16 md:pb-16 reveal-up reveal-delay-1">
				<div className="glass-surface relative rounded-2xl p-4 pb-14 md:p-10 md:pb-20">
					<BrowserFrame
						src={project.cover.src}
						alt={project.cover.alt}
						url={project.cover.url}
						priority
						sizes="(min-width: 1280px) 1200px, 95vw"
					/>
					{heroPhone && (
						<PhoneFrame
							src={heroPhone.src}
							alt={heroPhone.alt}
							statusBar={heroPhone.statusBar}
							sizes="200px"
							className="absolute -bottom-4 right-6 w-[24%] max-w-[210px] md:right-14"
						/>
					)}
				</div>
			</section>

			{/* Stats */}
			<section className="grid w-full grid-cols-2 gap-3 md:grid-cols-4 reveal-up">
				{project.stats.map((stat) => (
					<div key={stat.label} className="glass-surface rounded-2xl px-4 py-5 md:px-5 md:py-6">
						<p className="text-3xl font-bold text-primary md:text-4xl">
							{stat.value}
						</p>
						<p className="mt-2 text-sm font-semibold text-foreground/70">
							{stat.label}
						</p>
					</div>
				))}
			</section>

			{/* Brief */}
			<section className="section-wrap px-0">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
					<div className="reveal-up">
						<SectionHeading
							eyebrow="The brief"
							title="What they came to us with"
						/>
						<div className="space-y-5 text-base font-medium leading-relaxed text-foreground/80 md:text-lg">
							{project.brief.story.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					</div>
					<div className="glass-surface h-fit rounded-2xl p-6 md:p-8 reveal-up reveal-delay-1">
						<h3 className="text-xl font-bold text-primary">What they needed</h3>
						<Separator className="my-4" />
						<ul className="space-y-3">
							{project.brief.asks.map((ask) => (
								<li key={ask} className="text-base font-medium">
									<span aria-hidden="true">-&gt;</span> {ask}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="w-full">
				<div className="reveal-up">
					<SectionHeading
						eyebrow="What we built"
						title="The pieces that make it work"
					/>
				</div>
				<div
					className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${project.features.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
				>
					{project.features.map((feature) => (
						<div
							key={feature.title}
							className="glass-surface rounded-2xl p-5 md:p-6 reveal-up"
						>
							<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-background/70 text-primary">
								<feature.icon className="h-5 w-5" />
							</span>
							<h3 className="mt-5 text-lg font-bold leading-snug">
								{feature.title}
							</h3>
							<p className="mt-2 text-sm font-medium leading-relaxed text-foreground/75">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</section>

			<ProjectSpotlight slug={project.slug} />

			{/* Screens */}
			<section className="w-full">
				<div className="reveal-up">
					<SectionHeading
						eyebrow="A closer look"
						title="Screens from the live site"
					/>
				</div>
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-y-12">
					{project.screens.map((screen) => (
						<figure key={screen.src} className="reveal-up">
							<BrowserFrame
								src={screen.src}
								alt={screen.alt}
								url={screen.url}
								sizes="(min-width: 768px) 45vw, 95vw"
							/>
							<figcaption className="mt-4 text-base font-medium leading-relaxed text-foreground/75">
								{screen.caption}
							</figcaption>
						</figure>
					))}
				</div>

				{otherPhones.length > 0 && (
					<div className="glass-surface mt-12 flex flex-col items-center gap-8 rounded-2xl p-6 md:flex-row md:p-12 reveal-up">
						<div className="md:max-w-xs">
							<h3 className="text-2xl font-bold">Made for phones first</h3>
							<p className="mt-3 text-base font-medium leading-relaxed text-foreground/75">
								Most visitors arrive on a phone, often on a slow connection.
								Every screen was designed and tested for that first.
							</p>
						</div>
						<div className="flex w-full flex-1 justify-center gap-3 md:gap-6">
							{project.mobileScreens.map((screen) => (
								<PhoneFrame
									key={screen.src}
									src={screen.src}
									alt={screen.alt}
									statusBar={screen.statusBar}
									sizes="200px"
									className="w-1/3 max-w-[200px]"
								/>
							))}
						</div>
					</div>
				)}
			</section>

			{/* Engineering */}
			<section className="section-wrap px-0">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
					<div className="reveal-up">
						<SectionHeading
							eyebrow="Under the hood"
							title="The decisions you don't see"
						/>
						<p className="text-base font-medium leading-relaxed text-foreground/75">
							Good software is mostly the parts nobody notices: what happens
							when a payment fails, a page loads on 2G, or someone clicks the
							wrong button. Here's some of that.
						</p>
						<div className="mt-8">
							<p className="text-sm font-semibold text-foreground/55">
								Built with
							</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{project.stack.map((tech) => (
									<span
										key={tech}
										className="rounded-full border border-primary/20 bg-background/70 px-3 py-1 text-sm font-semibold text-foreground/80"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
					<ol className="space-y-4">
						{project.highlights.map((highlight, i) => (
							<li
								key={highlight.title}
								className="glass-surface flex gap-4 rounded-2xl p-5 md:gap-5 md:p-6 reveal-up"
							>
								<span className="text-xl font-bold text-primary/50 md:text-2xl">
									{String(i + 1).padStart(2, "0")}
								</span>
								<div>
									<h3 className="text-lg font-bold leading-snug">
										{highlight.title}
									</h3>
									<p className="mt-2 text-base font-medium leading-relaxed text-foreground/75">
										{highlight.description}
									</p>
								</div>
							</li>
						))}
					</ol>
				</div>
			</section>

			<ProjectCTA />

			{/* Next project */}
			<Link
				href={`/work/${next.slug}`}
				className="group glass-surface flex w-full items-center justify-between gap-6 rounded-2xl p-5 transition-colors hover:border-primary/50 md:p-8 reveal-up"
			>
				<div>
					<p className="text-sm font-semibold text-foreground/55">
						Next project
					</p>
					<p className="mt-1 text-2xl font-bold md:text-3xl">{next.name}</p>
					<p className="mt-1 hidden text-base font-medium text-foreground/70 md:block">
						{next.tagline}
					</p>
				</div>
				<ArrowRight className="h-8 w-8 shrink-0 text-primary transition-transform duration-200 group-hover:-rotate-45" />
			</Link>

			<Footer />
		</main>
	);
}
