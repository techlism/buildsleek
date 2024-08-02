import AboutUs from "@/components/AboutUs";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
export default async function Home() {
	return (
		<main className="flex flex-col items-center justify-between" id="main">
			<HeroSection />
			<AboutUs />
			<Services />
			<FAQs />
			<Footer />
		</main>
	);
}
