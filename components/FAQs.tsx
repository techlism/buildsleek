import { CTAButton } from "./CTA";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

function FAQ({
	title,
	content,
	val,
}: { title: string; content: string; val: string }) {
	return (
		<AccordionItem value={val}>
			<AccordionTrigger className="text-left">{title}</AccordionTrigger>
			<AccordionContent className="text-primary">{content}</AccordionContent>
		</AccordionItem>
	);
}

const QnA = [
	{
		question: "What services do you offer?",
		answer:
			"We offer a range of services including full-stack development, mobile app development, cloud solutions, API integration, and more. If it's digital, we can handle it.",
	},
	{
		question: "How long does it take to build a website?",
		answer:
			"Project timelines vary, but a typical website can take a few weeks to a few months, depending on its complexity.",
	},
	{
		question: "Can you help with mobile app development?",
		answer:
			"Yes, we develop mobile apps for both iOS and Android(using cross-platform technologies), ensuring a smooth experience across devices.",
	},
	{
		question: "What is your pricing structure?",
		answer:
			"Our pricing is customized based on your needs. We'll work with you to create a solution that fits your budget.",
	},
	{
		question: "Do you provide ongoing support after the project is complete?",
		answer:
			"Absolutely. We're here to support you even after the project wraps up. We also offer maintenance and support packages to keep your website running smoothly.",
	},
	{
		question: "Can you handle domain and DNS management?",
		answer:
			"Yes, we take care of domain and DNS management to keep your website running smoothly.",
	},
	{
		question: "What if I need changes after the project is done?",
		answer:
			"We're always available for updates or changes. Just let us know what you need.",
	},
	{
		question: "How do we get started?",
		answer:
			"Simply reach out to us, and we'll guide you through the process. We're here to help every step of the way.",
	},
	{
		question: "Can I get refund if I'm not satisfied with the service?",
		answer:
			"We are a small team and we put a lot of effort into every project we take on. We want to make sure you are happy with the service we provide. If you are not satisfied with the service, we will work with you to make it right. Unfortunately, no refunds :) .",
	},
	{
		question: "What technologies do you work with?",
		answer:
			"We work with a range of technologies including Nextjs, React, Node.js, Python, React-Native, and more.",
	},
];

export default function FAQs() {
	return (
		<section className="w-full mx-auto" id="faq">
			<h2 className="text-3xl font-bold mx-auto text-center p-4">
				Questions? We've got{" "}
				<span className="italic font-serif text-4xl">answers</span>.
			</h2>
			<Accordion
				type={"multiple"}
				className="max-w-[92%] md:max-w-6xl lg:max-w-6xl xl:max-w-6xl p-4 m-4 lg:mx-4 xl:mx-auto border rounded-lg"
			>
				{QnA.map((item, index) => (
					<FAQ
						title={item.question}
						content={item.answer}
						val={"q_item-" + (index + 1)}
						key={index + "_question"}
					/>
				))}
			</Accordion>
			<p className="font-medium text-lg my-4 mx-4 md:mx-auto lg:mx-auto xl:mx-auto text-center">
				Still have questions? Now it's definitely the time to{" "}
				<CTAButton
					variant={"link"}
					className="text-primary mx-0 p-0 text-lg"
					message="reach out to us"
				/>
				.
			</p>
		</section>
	);
}
