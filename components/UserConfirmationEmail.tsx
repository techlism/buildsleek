import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Tailwind,
	Text,
} from "@react-email/components";

import * as React from "react";

interface UserConfirmationEmailProps {
	name: string;
	message: string;
}

export default function UserConfirmationEmail({
	name,
	message,
}: UserConfirmationEmailProps) {
	// return (
	//   <Html>
	//     <Head />
	//     <Preview>We've Received Your Message</Preview>
	//     <Body className="font-sans">
	//       <Container className="mx-auto py-5 px-4">
	//         <Text className="text-2xl font-bold mb-4">Thank You for Contacting Us</Text>
	//         <Hr className="border-gray-300 my-4" />
	//         <Text className="text-base mb-4">
	//           Dear {name},
	//         </Text>
	//         <Text className="text-base mb-4 border">
	//           We have received your message and will get back to you shortly. Here's a copy of your message:
	//         </Text>
	//         <Text className="text-base bg-gray-200 p-4 rounded-lg mb-4 italic" style={{backgroundColor : '#FFF'}}>
	//           {message}
	//         </Text>
	//         <Text className="text-base">
	//           Someone from our team will reach out to you soon.
	//           We are using gmail as our automated email service. The next email you receive will be from our official email address.
	//         </Text>
	//         <Text className="text-base mt-4">
	//           Best regards,<br />
	//           BuildSleek.
	//         </Text>
	//       </Container>
	//     </Body>
	//   </Html>
	// );
	return (
		<Tailwind
			config={{
				theme: {
					container: {
						center: true,
						padding: "2rem",
						screens: {
							"2xl": "1400px",
						},
					},
					extend: {
						colors: {
							border: "#ebf5f7", // HSL(176 3% 91%)
							input: "#ebf5f7", // HSL(176 3% 91%)
							ring: "#30bfbf", // HSL(176 54% 51%)
							background: "#e6fcfd", // HSL(176 66% 99%)
							foreground: "#061b1c", // HSL(176 59% 4%)
							primary: {
								DEFAULT: "#30bfbf", // HSL(176 54% 51%)
								foreground: "#0e3c40", // HSL(176 33.93% 8.46%)
							},
							secondary: {
								DEFAULT: "#d5f4f5", // HSL(176 8% 84%)
								foreground: "#485d5d", // HSL(176 8% 24%)
							},
							destructive: {
								DEFAULT: "#ff3b3b", // HSL(0 100% 39.61%)
								foreground: "#ffffff", // HSL(0 0% 100%)
							},
							muted: {
								DEFAULT: "#d8f1f2", // HSL(176 18% 89%)
								foreground: "#0b4043", // HSL(176 1% 36%)
							},
							accent: {
								DEFAULT: "#d5f4f5", // HSL(176 8% 84%)
								foreground: "#485d5d", // HSL(176 8% 24%)
							},
							popover: {
								DEFAULT: "#e6fcfd", // HSL(176 66% 99%)
								foreground: "#061b1c", // HSL(176 59% 4%)
							},
							card: {
								DEFAULT: "#f7f7f7", // HSL(176 0% 97.12%)
								foreground: "#061b1c", // HSL(176 59% 4%)
							},
						},
						borderRadius: {
							lg: "0.5rem", // var(--radius)
							md: "calc(0.5rem - 2px)", // calc(var(--radius) - 2px)
							sm: "calc(0.5rem - 4px)", // calc(var(--radius) - 4px)
						},
					},
				},
			}}
		>
			<Html>
				<Head />
				<Preview>We've Received Your Message</Preview>
				<Body className="font-sans text-accent">
					<Container className="mx-auto py-5 px-4">
						<Text className="text-xl font-bold mb-4">
							Thank You for Contacting Us
						</Text>
						<Hr className="border my-4" />
						<Text className="text-base mb-4 font-medium">Dear {name},</Text>
						<Text className="text-base mb-4 border">
							We have received your message and will get back to you shortly.
							Here's a copy of your message:
						</Text>
						<Text className="text-base bg-card p-4 rounded-lg mb-4 font-mono font-medium text-primary-foreground">
							{message}
						</Text>
						<Text className="text-base">
							One of our team members will be in touch with you shortly. Please
							note that this message was sent using our automated Gmail service.
							Future communications will come directly from our official email
							address.
						</Text>
						<Text className="text-base mt-4">Best regards,</Text>
						<Text className="text-base mt-1 text-primary font-semibold">
							<Img
								src="https://buildsleek.com/logo.svg"
								alt="BuildSleek"
								className="w-16 h-16"
							/>
							BuildSleek
						</Text>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	);
}
