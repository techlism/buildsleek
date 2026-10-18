import {
	ArrowDown,
	ArrowRight,
	Database,
	FileText,
	Globe,
	Receipt,
	Server,
	Undo2,
	Wallet,
} from "lucide-react";
import Image from "next/image";

function SpotlightShell({
	eyebrow,
	title,
	description,
	children,
}: {
	eyebrow: string;
	title: string;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<section className="section-wrap px-0">
			<div className="glass-surface overflow-hidden rounded-2xl reveal-up">
				<div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:p-14">
					<div>
						<p className="text-sm font-semibold uppercase tracking-wider text-primary">
							{eyebrow}
						</p>
						<h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
							{title}
						</h2>
						<p className="mt-5 text-base font-medium leading-relaxed text-foreground/80 md:text-lg">
							{description}
						</p>
					</div>
					<div>{children}</div>
				</div>
			</div>
		</section>
	);
}

const pdfPages = [
	{
		src: "/work/cosmicdrishti/pdf-contents.webp",
		alt: "Report table of contents",
		rotate: "-rotate-6",
		offset: "translate-y-4",
	},
	{
		src: "/work/cosmicdrishti/pdf-charts.webp",
		alt: "Birth and navamsa chart page",
		rotate: "-rotate-2",
		offset: "",
	},
	{
		src: "/work/cosmicdrishti/pdf-chapter.webp",
		alt: "Parashari system chapter page",
		rotate: "rotate-2",
		offset: "-translate-y-2",
	},
	{
		src: "/work/cosmicdrishti/pdf-planets.webp",
		alt: "Planetary positions page",
		rotate: "rotate-6",
		offset: "translate-y-5",
	},
];

function CosmicDrishtiSpotlight() {
	return (
		<SpotlightShell
			eyebrow="The detailed kundli"
			title="A report people actually keep."
			description="Over 150 pages, from birth charts and planetary strengths to dashas, yogas, remedies and year-by-year predictions. Each chapter explains itself in plain words, and the whole thing is available in English or Hindi."
		>
			<div className="flex items-center justify-center py-6">
				{pdfPages.map((page, index) => (
					<div
						key={page.src}
						className={`relative w-1/4 max-w-[170px] ${index > 0 ? "-ml-6 md:-ml-8" : ""} ${page.rotate} ${page.offset}`}
					>
						<Image
							src={page.src}
							alt={page.alt}
							width={720}
							height={1018}
							sizes="170px"
							className="h-auto w-full rounded-md border border-primary/20 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)]"
						/>
					</div>
				))}
			</div>
		</SpotlightShell>
	);
}

const ledgerSteps = [
	{
		icon: Receipt,
		title: "Due added",
		text: "Tuition, hostel or exam fee, assigned to one student for one academic year.",
	},
	{
		icon: Wallet,
		title: "Payment recorded",
		text: "Cash, DD, cheque or transfer. Part payments are fine.",
	},
	{
		icon: FileText,
		title: "Receipt issued",
		text: "A numbered PDF receipt, made fresh from the ledger every time.",
	},
	{
		icon: Undo2,
		title: "Reversal, if needed",
		text: "Mistakes are reversed with a reason, never edited away.",
	},
];

function NdetSpotlight() {
	return (
		<SpotlightShell
			eyebrow="The fee ledger"
			title="From the registers to receipts that hold up."
			description="The office used to track fees in registers. Now every due, payment and correction is recorded once, linked to the right student, and can be traced later by anyone who needs to check."
		>
			<ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{ledgerSteps.map((step, index) => (
					<li
						key={step.title}
						className="relative rounded-xl border border-primary/20 bg-background/70 p-5"
					>
						<div className="flex items-center gap-3">
							<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<step.icon className="h-5 w-5" />
							</span>
							<span className="text-xs font-bold text-foreground/45">
								0{index + 1}
							</span>
						</div>
						<p className="mt-4 font-bold">{step.title}</p>
						<p className="mt-1 text-sm font-medium leading-relaxed text-foreground/70">
							{step.text}
						</p>
					</li>
				))}
			</ol>
			<p className="mt-4 rounded-xl border border-dashed border-primary/30 px-4 py-3 text-sm font-medium text-foreground/75">
				Outstanding balance = all dues minus every payment that wasn't reversed.
				Always correct, always up to date.
			</p>
		</SpotlightShell>
	);
}

function DomainNode({
	domain,
	label,
	color,
}: { domain: string; label: string; color: string }) {
	return (
		<div className="flex-1 rounded-xl border border-primary/20 bg-background/70 p-4 text-center">
			<span
				className="mx-auto mb-2 block h-1.5 w-10 rounded-full"
				style={{ backgroundColor: color }}
			/>
			<p className="flex items-center justify-center gap-1.5 text-sm font-bold">
				<Globe className="h-4 w-4 text-primary" />
				{domain}
			</p>
			<p className="mt-1 text-xs font-medium text-foreground/60">{label}</p>
		</div>
	);
}

function ImperialSpotlight() {
	return (
		<SpotlightShell
			eyebrow="One platform, two colleges"
			title="Two websites. One thing to look after."
			description="Both colleges run on the same app, server and database. Each domain gets its own branding and content, and staff manage both from one admin panel."
		>
			<div className="space-y-3">
				<div className="flex gap-3">
					<DomainNode
						domain="ndet.co.in"
						label="Green theme · 4 programs"
						color="#16A34A"
					/>
					<DomainNode
						domain="imperialnursing.in"
						label="Blue theme · B.Sc Nursing"
						color="#2563EB"
					/>
				</div>
				<div className="flex justify-center text-primary/60">
					<ArrowDown className="h-5 w-5" />
				</div>
				<div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
					<p className="flex items-center gap-2 font-bold">
						<Server className="h-4 w-4 text-primary" /> One Next.js app
					</p>
					<p className="mt-1 text-sm font-medium text-foreground/70">
						Reads the domain, loads that college's logo, colours, menus and
						copy.
					</p>
				</div>
				<div className="flex justify-center text-primary/60">
					<ArrowDown className="h-5 w-5" />
				</div>
				<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
					<div className="rounded-xl border border-primary/20 bg-background/70 p-4">
						<p className="flex items-center gap-2 font-bold">
							<Database className="h-4 w-4 text-primary" /> One database
						</p>
						<p className="mt-1 text-sm font-medium text-foreground/70">
							Every notice, event and album is tagged with its college, and the
							database enforces it.
						</p>
					</div>
					<div className="rounded-xl border border-primary/20 bg-background/70 p-4">
						<p className="flex items-center gap-2 font-bold">
							<ArrowRight className="h-4 w-4 text-primary" /> One admin panel
						</p>
						<p className="mt-1 text-sm font-medium text-foreground/70">
							A toggle switches between colleges. Same login, same screens.
						</p>
					</div>
				</div>
			</div>
		</SpotlightShell>
	);
}

export default function ProjectSpotlight({ slug }: { slug: string }) {
	if (slug === "cosmicdrishti") return <CosmicDrishtiSpotlight />;
	if (slug === "ndet") return <NdetSpotlight />;
	if (slug === "imperial") return <ImperialSpotlight />;
	return null;
}
