"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { HTMLProps, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";

type CTAButtonProps = {
	variant?:
		| "secondary"
		| "destructive"
		| "outline"
		| "ghost"
		| "link"
		| "default"
		| null
		| undefined;
	size?: "default" | "sm" | "lg" | "icon";
	className?: HTMLProps<HTMLElement>["className"];
	message?: string;
};

export function CTAButton({
	variant,
	size,
	className,
	message,
}: CTAButtonProps) {
	const formRef = useRef<HTMLFormElement>(null);

	const [mailSentStatus, setMailSentStatus] = useState<string | null>(null);
	const [emailError, setEmailError] = useState<string | null>(null);
	const [isSending, setIsSending] = useState<boolean>(false); // Loading state
	const [open, setOpen] = useState(false);

	const validateEmail = (email: string) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	async function sendMail(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();

		if (formRef.current) {
			const formData = new FormData(formRef.current);
			const email = formData.get("email") as string;
			if (!validateEmail(email)) {
				setEmailError("Please enter a valid email address.");
				setTimeout(() => {
					setEmailError(null);
				}, 2000);
				return;
			}
			const formValues = Object.fromEntries(formData.entries());

			setIsSending(true); // Set loading state to true

			try {
				const response = await fetch("/api/send-mail", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formValues),
				});

				if (response.ok) {
					setMailSentStatus("success");
					setTimeout(() => {
						setMailSentStatus(null);
						setOpen(false); // Close the dialog after showing the success message
					}, 2000);
				} else {
					setMailSentStatus("error");
					setTimeout(() => {
						setMailSentStatus(null);
					}, 2000);
				}
			} catch (error) {
				setMailSentStatus("error");
				setTimeout(() => {
					setMailSentStatus(null);
				}, 2000);
			} finally {
				setIsSending(false); // Set loading state to false
			}
		}
	}

	return (
		<Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
			<DialogTrigger asChild>
				<Button className={className} variant={variant} size={size}>
					{message || "Contact Us"}
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[315px] sm:max-w-[425px] mx-auto rounded-lg">
				<DialogHeader>
					<DialogTitle>Reach Out to Us</DialogTitle>
					<DialogDescription>
						Got a question, a project, or just want to say hi? Drop us a message
						below, and we promise to respond (eventually).
					</DialogDescription>
				</DialogHeader>
				{emailError && (
					<p className="text-sm font-medium p-2 text-center rounded-lg bg-destructive text-destructive-foreground">
						{emailError}
					</p>
				)}
				{mailSentStatus === "success" ? (
					<p className="text-sm font-medium p-2 text-center rounded-lg bg-green-500 text-white">
						Message sent successfully!
					</p>
				) : mailSentStatus === "error" ? (
					<p className="text-sm font-medium p-2 text-center rounded-lg bg-destructive text-destructive-foreground">
						Failed to send the message. Please try again.
					</p>
				) : (
					<form ref={formRef} className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input
								id="name"
								name="name"
								placeholder="John Doe"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="email" className="text-right">
								Email
							</Label>
							<Input
								id="email"
								name="email"
								placeholder="john.doe@example.com"
								type="email"
								className="col-span-3"
								required
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="message" className="text-right">
								Message
							</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="What's on your mind?"
								className="col-span-3"
							/>
						</div>
						<DialogFooter>
							<Button
								type="submit"
								onClick={(e) => sendMail(e)}
								disabled={isSending}
							>
								{isSending ? (
									<Loader2 className="animate-spin" />
								) : (
									"Send Message"
								)}
							</Button>
						</DialogFooter>
					</form>
				)}
			</DialogContent>
		</Dialog>
	);
}
