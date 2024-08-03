import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
	name: string;
	email: string;
	message: string;
}

export default function ContactEmail({
	name,
	email,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Contact Form Submission</Preview>
			<Body className="bg-white font-sans">
				<Container className="mx-auto py-5 px-4">
					<Text className="text-2xl font-bold mb-4">
						New Contact Form Submission
					</Text>
					<Hr className="border-gray-300 my-4" />
					<Text className="text-base mb-4">
						<strong>Name:</strong> {name}
					</Text>
					<Text className="text-base mb-4">
						<strong>Email:</strong> {email}
					</Text>
					<Text className="text-base mb-2">
						<strong>Message:</strong>
					</Text>
					<Text className="text-base bg-gray-100 p-4 rounded-lg">
						{message}
					</Text>
				</Container>
			</Body>
		</Html>
	);
}
