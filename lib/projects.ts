import {
	BookOpen,
	Calculator,
	CalendarClock,
	FileSpreadsheet,
	FileText,
	Globe,
	GraduationCap,
	Hand,
	Images,
	IndianRupee,
	Languages,
	LayoutDashboard,
	type LucideIcon,
	Megaphone,
	MessageCircle,
	Palette,
	Printer,
	Receipt,
	ShieldCheck,
	Split,
	UserCheck,
	Video,
	Wallet,
} from "lucide-react";

export type Screen = {
	src: string;
	alt: string;
	caption: string;
	url: string;
};

export type MobileScreen = {
	src: string;
	alt: string;
	/** Colour behind the phone's status bar, matched to the page header. */
	statusBar?: string;
};

export type Feature = {
	icon: LucideIcon;
	title: string;
	description: string;
};

export type Highlight = {
	title: string;
	description: string;
};

export type Stat = {
	value: string;
	label: string;
};

export type Project = {
	slug: string;
	name: string;
	client: string;
	category: string;
	year: string;
	liveUrl: string;
	liveLabel: string;
	tagline: string;
	summary: string;
	accent: string;
	services: string[];
	cover: Screen;
	coverMobile: MobileScreen;
	brief: {
		story: string[];
		asks: string[];
	};
	features: Feature[];
	screens: Screen[];
	mobileScreens: MobileScreen[];
	highlights: Highlight[];
	stack: string[];
	stats: Stat[];
	quote?: string;
};

export const projects: Project[] = [
	{
		slug: "cosmicdrishti",
		name: "CosmicDrishti",
		client: "CosmicDrishti",
		category: "Marketplace platform",
		year: "2026",
		liveUrl: "https://cosmicdrishti.com",
		liveLabel: "cosmicdrishti.com",
		tagline:
			"An astrology marketplace with video calls, a wallet, and reports that run past a hundred pages.",
		summary:
			"Customers book verified astrologers for private video calls, top up a wallet, and buy detailed birth-chart reports in English or Hindi. Astrologers and the admin team each get their own portal.",
		accent: "#B4341A",
		services: [
			"Product design",
			"Full stack development",
			"AI integration",
			"Cloud & DevOps",
		],
		cover: {
			src: "/work/cosmicdrishti/home.webp",
			alt: "CosmicDrishti home page with a hero inviting visitors to talk to an astrologer",
			caption: "The landing page",
			url: "cosmicdrishti.com",
		},
		coverMobile: {
			src: "/work/cosmicdrishti/home-mobile.webp",
			alt: "CosmicDrishti home page on a phone",
			statusBar: "#b13416",
		},
		brief: {
			story: [
				"The founders wanted something bigger than an astrology blog. They wanted a proper marketplace: people come in for a free kundli or today's panchang, start trusting the place, and then book a paid one-on-one call with an astrologer.",
				"That meant three kinds of users with very different needs. Customers want it quick and simple on a phone. Astrologers need to manage their hours and get paid on time. The team running it needs to approve astrologers, watch the money, and settle payouts without a spreadsheet.",
				"And the reports had to be good. People compare against the big names in this space, so a chart that is even a little off loses their trust for good.",
			],
			asks: [
				"Free tools that bring people in: kundli, panchang, horoscopes and calculators",
				"Private video consultations booked against an astrologer's real availability",
				"A prepaid wallet with online top-ups and automatic refunds",
				"Long, readable PDF reports in English and Hindi",
				"Separate portals for astrologers and admins",
				"Commission tracking and astrologer payouts",
			],
		},
		features: [
			{
				icon: Video,
				title: "Live video consultations",
				description:
					"Customers pick a 10, 15 or 30 minute slot. A private video room is created with the booking and opens only around the session time.",
			},
			{
				icon: CalendarClock,
				title: "Real availability",
				description:
					"Astrologers set weekly hours and one-off days off in their own timezone. A slot is held briefly while someone checks out, so two people can't book the same one.",
			},
			{
				icon: Wallet,
				title: "Wallet and payments",
				description:
					"Top-ups go through Razorpay. Every rupee in or out is a ledger entry, and if an astrologer declines a booking the money goes straight back to the wallet.",
			},
			{
				icon: FileText,
				title: "Detailed PDF reports",
				description:
					"Detailed kundli, horoscope, numerology, matchmaking and gemstone reports, generated in the background and ready to download in English or Hindi.",
			},
			{
				icon: Calculator,
				title: "17 free calculators",
				description:
					"Dasha, Sade Sati, Mangal dosha, nakshatra, Lo Shu grid and more. Each one is a small, useful answer and a reason to come back.",
			},
			{
				icon: Hand,
				title: "Palm reading",
				description:
					"Upload a photo of your palm and get a written reading back as a PDF. Photos are stored privately and only shared through short-lived links.",
			},
			{
				icon: Languages,
				title: "English and Hindi",
				description:
					"The site and the reports both work in two languages, so families can read their chart in the language they're comfortable with.",
			},
			{
				icon: IndianRupee,
				title: "Payouts for astrologers",
				description:
					"Each completed booking records what the customer paid, the platform fee and the astrologer's share. Admins batch those into payout requests and settle them.",
			},
		],
		screens: [
			{
				src: "/work/cosmicdrishti/panchang.webp",
				alt: "Today's panchang page with tithi, nakshatra, yog and karan timelines",
				caption:
					"Today's panchang, with tithi, nakshatra, yog and karan laid out on a timeline for any city.",
				url: "cosmicdrishti.com/panchang",
			},
			{
				src: "/work/cosmicdrishti/reports.webp",
				alt: "Astrology reports catalogue with six report cards and prices",
				caption:
					"The reports shop. Every report is built from the customer's own birth details.",
				url: "cosmicdrishti.com/reports",
			},
			{
				src: "/work/cosmicdrishti/pricing.webp",
				alt: "Pricing page showing consultation prices for 10, 15 and 30 minutes",
				caption: "Plain pricing. No subscriptions, no small print.",
				url: "cosmicdrishti.com/pricing",
			},
			{
				src: "/work/cosmicdrishti/kundli.webp",
				alt: "Free kundli form asking for name, date, time and place of birth",
				caption: "The free kundli form. It's short on purpose.",
				url: "cosmicdrishti.com/kundli",
			},
			{
				src: "/work/cosmicdrishti/calculators.webp",
				alt: "List of seventeen Vedic astrology calculators",
				caption: "Seventeen calculators, each a small way in.",
				url: "cosmicdrishti.com/calculators",
			},
			{
				src: "/work/cosmicdrishti/topics.webp",
				alt: "Consultation topics such as love, career, marriage and finance",
				caption:
					"People browse by what's on their mind, not by astrology terms.",
				url: "cosmicdrishti.com",
			},
		],
		mobileScreens: [
			{
				src: "/work/cosmicdrishti/home-mobile.webp",
				alt: "CosmicDrishti home page on mobile",
				statusBar: "#b13416",
			},
			{
				src: "/work/cosmicdrishti/kundli-mobile.webp",
				alt: "Free kundli form on mobile",
				statusBar: "#b13416",
			},
			{
				src: "/work/cosmicdrishti/panchang-mobile.webp",
				alt: "Today's panchang on mobile",
				statusBar: "#b13416",
			},
		],
		highlights: [
			{
				title: "We checked our maths against the market leaders",
				description:
					"Most of the chart calculations run on our own engine instead of a paid API. We tested it on a reference chart against two of the best-known astrology products. They differ from each other by about 20 points on planetary strength. We land within 8 of one and 14 of the other.",
			},
			{
				title: "AI writes the words, not the facts",
				description:
					"Report prose is written by a language model, but it never decides what's true. The chart facts are calculated first, matching passages are looked up in classical texts, and anything the model gets wrong is checked and removed before it reaches the page.",
			},
			{
				title: "One set of types across four apps",
				description:
					"The API, the customer site and both portals share the same request types and validation rules. If the backend changes, the frontends won't build until they catch up, so mismatches get caught before customers ever see them.",
			},
			{
				title: "Money can't get lost",
				description:
					"Payments are confirmed through signed webhooks and processed exactly once, even if the payment provider retries. Wallet balances come from a ledger, so every rupee can be traced.",
			},
			{
				title: "Heavy work happens in the background",
				description:
					"A 150-page PDF takes a while to make. Report and palm-reading jobs go into a queue and run in a separate worker, so the site stays quick while they're being built.",
			},
		],
		stack: [
			"Next.js",
			"React + Vite",
			"Hono",
			"TypeScript",
			"PostgreSQL",
			"Drizzle ORM",
			"Redis",
			"BullMQ",
			"Razorpay",
			"Daily.co",
			"AWS",
			"Docker",
			"Turborepo",
		],
		stats: [
			{ value: "4", label: "apps in one codebase" },
			{ value: "150+", label: "pages in a detailed kundli" },
			{ value: "17", label: "free calculators" },
			{ value: "2", label: "languages, site and reports" },
		],
	},
	{
		slug: "ndet",
		name: "NDET",
		client: "Nirmala Devi Educational Trust",
		category: "College website + admin",
		year: "2026",
		liveUrl: "https://ndet.co.in",
		liveLabel: "ndet.co.in",
		tagline:
			"A college website and back office that the office staff actually run themselves.",
		summary:
			"We replaced an old WordPress site with a fast public website and a private admin portal. Staff post notices and photos, record student fees, and print receipts, with no developer needed.",
		accent: "#16A34A",
		services: [
			"Web development",
			"Backend systems",
			"UI/UX design",
			"Cloud & DevOps",
		],
		cover: {
			src: "/work/ndet/colleges.webp",
			alt: "NDET home page showing the two colleges under the trust",
			caption: "The colleges under the trust",
			url: "ndet.co.in",
		},
		coverMobile: {
			src: "/work/ndet/home-mobile.webp",
			alt: "NDET home page on a phone",
		},
		brief: {
			story: [
				"Nirmala Devi Educational Trust runs nursing and pharmacy colleges in Khunti, Jharkhand. Their old WordPress site was slow, hard to update, and every small change meant calling someone.",
				"Admissions run on trust. A parent in a nearby district wants to see real photos, current approvals and a clear fee structure before they make the trip, and most of them are looking on a phone.",
				"Behind the scenes, fees were tracked in registers and spreadsheets. Students pay in instalments, by cash, cheque or bank transfer, and every payment needs a receipt that holds up later.",
			],
			asks: [
				"A fast public site that ranks for nursing colleges in Jharkhand",
				"Office staff can post notices, events and photos on their own",
				"An admission enquiry form that lands straight in the admin panel",
				"Student records with admission details and roll numbers",
				"Fee dues, part payments and printable receipts",
				"Reports the accounts team can open in Excel",
			],
		},
		features: [
			{
				icon: Megaphone,
				title: "Notices and events",
				description:
					"Staff post exam schedules and circulars with attachments. Important ones stay pinned, and new posts get a badge for the first day.",
			},
			{
				icon: Images,
				title: "Gallery that stays light",
				description:
					"Photos are compressed in the browser before they upload. Albums load quickly even on a patchy mobile connection.",
			},
			{
				icon: MessageCircle,
				title: "Admission enquiries",
				description:
					"Enquiries from the website appear in the admin panel with the course the student is interested in, ready for a callback. WhatsApp and call buttons sit on every page.",
			},
			{
				icon: GraduationCap,
				title: "Student records",
				description:
					"Admission details, guardian info, class roll numbers and current year. Extra fields like blood group can be added without changing the database.",
			},
			{
				icon: Receipt,
				title: "Fees and receipts",
				description:
					"Dues are added per student, so hostel fees only go to hostel students. Part payments are fine, and every payment gets a numbered receipt as a PDF.",
			},
			{
				icon: FileSpreadsheet,
				title: "Excel reports",
				description:
					"Collections by date range, outstanding dues by student, breakdowns by fee head. One click and the accounts team has a spreadsheet.",
			},
			{
				icon: ShieldCheck,
				title: "Approvals on display",
				description:
					"INC and JNRC approval letters are uploaded by staff and shown on the About page, so parents can check them for themselves.",
			},
			{
				icon: Printer,
				title: "Official letterheads",
				description:
					"Letterheads with the college details and the director's signature are generated straight from the system for official documents.",
			},
		],
		screens: [
			{
				src: "/work/ndet/programs.webp",
				alt: "Programs offered section listing ANM, GNM, B.Sc Nursing and D.Pharma",
				caption:
					"All four programs on one screen, with duration and a link to the details.",
				url: "ndet.co.in",
			},
			{
				src: "/work/ndet/fee-structure.webp",
				alt: "Fee structure page with the official fee chart",
				caption:
					"Fee structure up front. Parents shouldn't have to call to find out the cost.",
				url: "ndet.co.in/fee-structure",
			},
			{
				src: "/work/ndet/notices.webp",
				alt: "Public notice board with a pinned examination schedule",
				caption:
					"The notice board. Staff post it, students see it straight away.",
				url: "ndet.co.in/notices",
			},
			{
				src: "/work/ndet/gallery.webp",
				alt: "Campus life gallery with photos of ceremonies and classrooms",
				caption: "Campus life, managed in albums from the admin panel.",
				url: "ndet.co.in/gallery",
			},
			{
				src: "/work/ndet/about.webp",
				alt: "About page with clinical training details and affiliation documents",
				caption:
					"About page with clinical partners and the actual approval letters.",
				url: "ndet.co.in/about",
			},
			{
				src: "/work/ndet/enquiry.webp",
				alt: "Admission enquiry form",
				caption: "One short form. It goes straight to the admissions desk.",
				url: "ndet.co.in/admission-enquiry",
			},
		],
		mobileScreens: [
			{ src: "/work/ndet/home-mobile.webp", alt: "NDET home page on mobile" },
		],
		highlights: [
			{
				title: "Payments are never edited",
				description:
					"Once a payment is recorded it stays as it is. If something was entered wrong, it gets reversed with a reason, and the record of who did what stays intact. Auditors love this.",
			},
			{
				title: "Receipts always match the books",
				description:
					"Receipt PDFs are created fresh from the database every time someone opens one, so a receipt can never disagree with the ledger. Receipt numbers run month by month and can't repeat.",
			},
			{
				title: "Built for how Indian colleges work",
				description:
					"Cash, DD, cheque and bank transfer. Academic years like 2025-26. Every date shown in Indian time, whatever the server says.",
			},
			{
				title: "Mistakes are hard to make",
				description:
					"Students are archived, not deleted, and a record with payment history can't be removed at all. Private files like payment scans are only shared through links that expire after an hour.",
			},
		],
		stack: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Drizzle ORM",
			"Tailwind CSS",
			"NextAuth",
			"Puppeteer",
			"ExcelJS",
			"S3 storage",
			"Docker",
			"Cloudflare",
		],
		stats: [
			{ value: "4", label: "programs, one site" },
			{ value: "13", label: "admin sections" },
			{ value: "4", label: "payment modes supported" },
			{ value: "1 click", label: "Excel fee reports" },
		],
	},
	{
		slug: "imperial",
		name: "Imperial College of Nursing",
		client: "Imperial College of Nursing",
		category: "College website",
		year: "2026",
		liveUrl: "https://imperialnursing.in",
		liveLabel: "imperialnursing.in",
		tagline:
			"A second college website, live on its own domain, without a second codebase.",
		summary:
			"Imperial College of Nursing is part of the same group as NDET. Instead of building and paying for a whole new site, we added it to the platform we'd already built, with its own look, content and domain.",
		accent: "#2563EB",
		services: ["Web development", "UI/UX design", "SEO"],
		cover: {
			src: "/work/imperial/home.webp",
			alt: "Imperial College of Nursing home page with a photo of the campus building",
			caption: "The landing page",
			url: "imperialnursing.in",
		},
		coverMobile: {
			src: "/work/imperial/home-mobile.webp",
			alt: "Imperial College of Nursing home page on a phone",
		},
		brief: {
			story: [
				"Imperial College of Nursing runs one program, a four-year B.Sc Nursing degree, from its campus in Jamuwadag, Khunti. It's affiliated to Ranchi University and run by the same group as NDET.",
				"They needed their own website. Students searching for B.Sc Nursing should land on a page about Imperial, not a group page that lists four other courses.",
				"The office team was already using the NDET admin panel every day. Learning a second system, or paying to host and maintain another site, didn't make sense.",
			],
			asks: [
				"Its own domain, logo, colours and wording",
				"Focused on one program: B.Sc Nursing",
				"Separate notices, events and gallery from NDET",
				"Managed from the same admin panel staff already know",
				"Good search visibility for nursing colleges in Khunti and Ranchi",
			],
		},
		features: [
			{
				icon: Globe,
				title: "Its own domain",
				description:
					"imperialnursing.in serves its own pages, its own sitemap and its own search metadata. To visitors it's simply Imperial's website.",
			},
			{
				icon: Palette,
				title: "Its own identity",
				description:
					"Imperial's logo, a blue colour scheme instead of NDET's green, and copy written for one college with one program.",
			},
			{
				icon: Split,
				title: "Content kept apart",
				description:
					"Every notice, event and album belongs to one college. The database enforces it, so a post can't show up on the wrong site by accident.",
			},
			{
				icon: LayoutDashboard,
				title: "One admin panel",
				description:
					"Staff switch between NDET and Imperial with a toggle. Same login, same screens, same habits.",
			},
			{
				icon: BookOpen,
				title: "Program details",
				description:
					"Eligibility, timeline and career paths for B.Sc Nursing, written for students and parents rather than for a prospectus.",
			},
			{
				icon: UserCheck,
				title: "Enquiries to the right desk",
				description:
					"Admission enquiries come in tagged with the college, so Imperial's desk only sees Imperial's leads.",
			},
		],
		screens: [
			{
				src: "/work/imperial/about.webp",
				alt: "About page describing a focused B.Sc Nursing college in Khunti",
				caption:
					"The About page, written for a college that does one thing and does it properly.",
				url: "imperialnursing.in/about",
			},
			{
				src: "/work/imperial/life.webp",
				alt: "Life at ICN gallery with photos from Nutrition Week",
				caption: "Life at ICN. Photos from Nutrition Week, posted by staff.",
				url: "imperialnursing.in",
			},
			{
				src: "/work/imperial/facilities.webp",
				alt: "Campus facilities including library, labs and smart classrooms",
				caption:
					"Labs, library, hostel and classrooms, all real photos from the campus.",
				url: "imperialnursing.in",
			},
			{
				src: "/work/imperial/intro.webp",
				alt: "Home page intro with the headline Your B.Sc Nursing journey starts here",
				caption: "One program, one clear message.",
				url: "imperialnursing.in",
			},
			{
				src: "/work/imperial/course.webp",
				alt: "Our Program page showing the B.Sc Nursing course",
				caption: "The program page. Short, because there's one program.",
				url: "imperialnursing.in/course",
			},
			{
				src: "/work/imperial/enquiry.webp",
				alt: "Admission enquiry form for Imperial College of Nursing",
				caption: "Same enquiry flow as NDET, in Imperial's colours and voice.",
				url: "imperialnursing.in/admission-enquiry",
			},
		],
		mobileScreens: [
			{
				src: "/work/imperial/home-mobile.webp",
				alt: "Imperial home page on mobile",
			},
			{
				src: "/work/imperial/about-mobile.webp",
				alt: "Imperial about page on mobile",
			},
		],
		highlights: [
			{
				title: "The site is picked by domain",
				description:
					"When a request comes in, the platform looks at which domain it was sent to and loads that college's branding, menus and content. Adding a third college would mostly mean writing its content.",
			},
			{
				title: "Rendering and writing are kept separate",
				description:
					"The domain only decides what a visitor sees. Anything that saves data has to say which college it belongs to, and that's checked on the server. You can't trick the system into posting to the other college.",
			},
			{
				title: "Two sites, one bill",
				description:
					"One server, one database and one deployment serve both colleges. Every fix and every new feature reaches both sites at once.",
			},
		],
		stack: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Drizzle ORM",
			"Tailwind CSS",
			"Docker",
			"Cloudflare",
		],
		stats: [
			{ value: "2", label: "colleges, one platform" },
			{ value: "1", label: "admin panel for both" },
			{ value: "0", label: "extra servers" },
			{ value: "1", label: "codebase to maintain" },
		],
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
