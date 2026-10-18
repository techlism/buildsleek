import AboutUs from "@/components/AboutUs";
import FAQs, { QnA } from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Work from "@/components/Work";
import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
};

const structuredData = [
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "BuildSleek",
		url: "https://buildsleek.com",
		logo: "https://buildsleek.com/logo.svg",
		description: "Simple, reliable software for web, mobile, and AI.",
	},
	{
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: QnA.map((item) => ({
			"@type": "Question",
			name: item.question,
			acceptedAnswer: { "@type": "Answer", text: item.answer },
		})),
	},
];

export default async function Home() {
	return (
		<main className="flex flex-col items-center" id="main">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<HeroSection />
			<AboutUs />
			<Work />
			<Services />
			<FAQs />
			<Footer />
		</main>
	);
}
