import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
// import { GeistSans } from "geist/font/sans";
import { Manrope } from 'next/font/google';
import type { Metadata, Viewport } from "next";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL("https://buildsleek.com"),
	title: {
		default: "BuildSleek | Web, Mobile & AI Software Development",
		template: "%s | BuildSleek",
	},
	description:
		"BuildSleek builds simple, reliable software for growing businesses: websites, web apps, mobile apps, AI automation and the backend systems behind them.",
	creator: "Techlism",
	openGraph: {
		siteName: "BuildSleek",
		title: "BuildSleek | Web, Mobile & AI Software Development",
		description: "Simple, reliable software for web, mobile, and AI.",
		url: "/",
		type: "website",
		locale: "en_US",
		images: "/opengraph.png",
	},
	twitter: {
		card: "summary_large_image",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#e0e6ff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0c0b0e" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${manrope.className}`}>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
				>
					Skip to content
				</a>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<Navbar />
					<div className="max-w-7xl mx-auto m-4">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
