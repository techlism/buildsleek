import { CTAButton } from "../CTA";

type ProjectCTAProps = {
	title?: string;
	description?: string;
};

export default function ProjectCTA({
	title = "Got something similar in mind?",
	description = "Tell us what you're trying to build. We'll get back to you with honest advice, a rough plan and a timeline. No obligation, no jargon.",
}: ProjectCTAProps) {
	return (
		<section className="section-wrap px-0">
			<div className="glass-surface relative overflow-hidden rounded-2xl px-6 py-14 text-center md:px-10 md:py-20 reveal-up">
				<div
					className="pointer-events-none absolute inset-0 opacity-30"
					style={{
						backgroundImage:
							"linear-gradient(rgba(5, 109, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 109, 255, 0.3) 1px, transparent 1px)",
						backgroundSize: "28px 28px",
						maskImage:
							"radial-gradient(ellipse at center, black 10%, transparent 70%)",
					}}
				/>
				<div className="relative mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold leading-snug md:text-5xl">
						{title}
					</h2>
					<p className="mt-5 text-base font-medium leading-relaxed text-foreground/80 md:text-lg">
						{description}
					</p>
					<div className="mt-8 flex justify-center">
						<CTAButton className="px-6" message="Start a free consultation" />
					</div>
				</div>
			</div>
		</section>
	);
}
