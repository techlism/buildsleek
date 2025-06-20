import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
// import { GeistSans } from "geist/font/sans";
import { Manrope } from 'next/font/google';
import type { Metadata } from "next";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "BuildSleek",
	description: "BuildSleek - Get a sleek software for your business",
	creator: "Techlism",
	openGraph: {
		title: "BuildSleek",
		description: "BuildSleek - Get a sleek software for your business",
		url: "https://buildsleek.com",
		type: "website",
		locale: "en_US",
		images: "https://buildsleek.com/opengraph.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.className}`} lang="en">
				{/* defaultTheme="dark" enableSystem */}
				<ThemeProvider attribute="class" >
					<Navbar />
					<div className="max-w-7xl mx-auto m-4">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
