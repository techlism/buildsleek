import { projects } from "@/lib/projects";
import type { MetadataRoute } from "next";

const baseUrl = "https://buildsleek.com";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: baseUrl, changeFrequency: "monthly", priority: 1 },
		{ url: `${baseUrl}/work`, changeFrequency: "monthly", priority: 0.8 },
		...projects.map((project) => ({
			url: `${baseUrl}/work/${project.slug}`,
			changeFrequency: "yearly" as const,
			priority: 0.7,
		})),
	];
}
