import TeamNotificationEmail from "@/components/TeamNotificationEmail";
import UserConfirmationEmail from "@/components/UserConfirmationEmail";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	const { name, email, message } = await request.json();

	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});
	transporter.verify((error) => {
		if (error) {
			console.error("Error connecting to SMTP server:", error);
		}
	});

	try {
		// Email to the user
		const userEmailHtml = render(UserConfirmationEmail({ name, message }));
		await transporter.sendMail({
			from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
			to: email,
			subject: "We've Received Your Message",
			html: userEmailHtml,
		});

		// Email to the team
		const teamEmailHtml = render(
			TeamNotificationEmail({ name, email, message }),
		);
		await transporter.sendMail({
			from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
			to: process.env.TO_EMAIL,
			subject: "New Contact Form Submission",
			html: teamEmailHtml,
		});

		return NextResponse.json(
			{ message: "Emails sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json({ error: "Error sending email" }, { status: 500 });
	}
}
