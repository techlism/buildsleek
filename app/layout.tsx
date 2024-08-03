import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { GeistSans } from "geist/font/sans";

import type { Metadata } from "next";

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
			<body className={`${GeistSans.className}`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
