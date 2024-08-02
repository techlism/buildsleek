"use client";
import { motion } from "framer-motion";
import * as React from "react";
import { CTAButton } from "./CTA";

const services = [
	{
		title: "Full-Stack Development",
		description:
			"We'll handle everything from front-end to back-end, creating a seamless and integrated experience for your users. Whether it's a simple website or a complex application, we've got you covered.",
		svgPath: "/SVGs/all-covered-svgrepo-com.svg",
	},
	{
		title: "Website Development",
		description:
			"Let's build a website that not only looks great but also functions smoothly across all devices. From design to deployment, we'll create something that truly represents your brand.",
		svgPath: "/SVGs/availability-svgrepo-com.svg",
	},
	{
		title: "API Integration",
		description:
			"Need to connect your platform with other services? We'll seamlessly integrate third-party APIs to enhance functionality and ensure everything works together perfectly.",
		svgPath: "/SVGs/api-interface-svgrepo-com.svg",
	},
	{
		title: "Backend Development",
		description:
			"We'll build a strong, scalable backend that powers your application efficiently. With our expertise, your backend will be robust, reliable, and ready to scale as your business grows.",
		svgPath: "/SVGs/ddos-protection-svgrepo-com.svg",
	},
	{
		title: "Mobile App Development",
		description:
			"Looking to reach users on the go? We'll develop mobile apps that deliver a seamless experience across devices, ensuring your brand is always within reach.",
		svgPath: "/SVGs/mobile-app-svgrepo-com.svg",
	},
	{
		title: "Cloud Solutions",
		description:
			"We'll help you leverage cloud computing to improve scalability, accessibility, and reliability. Whether you're moving to the cloud or optimizing existing infrastructure, we're here to assist.",
		svgPath: "/SVGs/cloud-backup-svgrepo-com.svg",
	},
	{
		title: "Data Analytics",
		description:
			"Let's turn your data into actionable insights. We'll analyze your data and provide you with the information you need to make informed decisions and drive growth.",
		svgPath: "/SVGs/data-analysis-svgrepo-com.svg",
	},
	{
		title: "Domain and DNS Management",
		description:
			"We'll take care of your domain and DNS settings, ensuring your website is always accessible and configured correctly, so you can focus on running your business.",
		svgPath: "/SVGs/dns-svgrepo-com.svg",
	},
	{
		title: "UI/UX Design",
		description:
			"We'll craft intuitive and engaging user interfaces that provide a smooth and enjoyable experience for your users. Let's create something that not only looks good but feels right.",
		svgPath: "/SVGs/intelligent-positioning-svgrepo-com.svg",
	},
	{
		title: "Performance Optimization",
		description:
			"We'll fine-tune your application for optimal performance, reducing load times and improving overall user experience. Your users will thank you for the speed and responsiveness.",
		svgPath: "/SVGs/page-analysis-svgrepo-com.svg",
	},
	{
		title: "Email Setup and Configuration",
		description:
			"Need to set up a newsletter or configure custom email addresses for your domain? We’ll handle the setup so you can communicate effortlessly and professionally with your audience.",
		svgPath: "/SVGs/mail-reception-svgrepo-com.svg",
	},
];

export default function Services() {
	return (
		<section className="w-full" id="services">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="p-4 flex flex-col max-w-6xl justify-center items-center mx-auto text-center"
			>
				<h2 className="text-3xl font-bold justify-start">Our Services</h2>
				<p className="text-gray-400 text-base mt-2 text-justify mx-auto">
					At BuildSleek, we offer a wide range of services designed to meet your
					digital needs and exceed your expectations. Our expert team is
					committed to delivering high-quality solutions that drive business
					growth and success. Explore our services below to learn more about how
					we can help you achieve your goals.
				</p>
			</motion.div>

			<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 max-w-6xl mx-auto p-4">
				{services.slice(0, 2).map((service) => (
					<motion.div
						key={service.title}
						className="shadow-lg rounded-lg border hover:border-gradient bg-card"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
						whileHover={{ scale: 1.02 }}
					>
						<motion.img
							src={service.svgPath}
							alt={service.title}
							className="max-h-48 max-w-48"
							initial={{ scale: 0.9 }}
							animate={{ scale: 1 }}
							transition={{ duration: 0.5 }}
						/>
						<div className="p-4">
							<h3 className="text-xl font-bold">{service.title}</h3>
							<p className="text-gray-400 text-base mt-2 text-justify">
								{service.description}
							</p>
						</div>
					</motion.div>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4 max-w-6xl mx-auto p-4 pt-0">
				{services.map(
					(service, index) =>
						index !== 0 &&
						index !== 1 &&
						index !== services.length - 1 && (
							<motion.div
								key={service.title}
								className="shadow-lg rounded-lg flex border items-center hover:border-gradient bg-card "
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.2 }}
								whileHover={{ scale: 1.02 }}
							>
								<div className="p-4">
									<h3 className="text-xl font-bold">{service.title}</h3>
									<p className="text-gray-400 text-base mt-2 text-justify">
										{service.description}
									</p>
								</div>
								<motion.img
									src={service.svgPath}
									alt={service.title}
									className="max-h-24 max-w-24"
									initial={{ scale: 0.9 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.5 }}
								/>
							</motion.div>
						),
				)}
			</div>

			<div className="grid grid-cols-1 p-4 pt-0 max-w-6xl mx-auto">
				<motion.div
					key={services[services.length - 1].title}
					className="shadow-lg rounded-lg flex border items-center hover:border-gradient bg-card"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.02 }}
				>
					<div className="p-4">
						<h3 className="text-xl font-bold">
							{services[services.length - 1].title}
						</h3>
						<p className="text-gray-400 text-base mt-2 text-justify">
							{services[services.length - 1].description}
						</p>
					</div>
					<motion.img
						src={services[services.length - 1].svgPath}
						alt={services[services.length - 1].title}
						className="max-h-24 max-w-24 lg:max-h-48 lg:max-w-48 xl:max-h-48 xl:max-w-48"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
					/>
				</motion.div>
			</div>
			<div className="mb-4 mx-auto flex justify-center">
				<CTAButton />
			</div>
		</section>
	);
}
