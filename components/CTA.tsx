"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
	const [emailError, setEmailError] = useState<string | null>(null);

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
				formRef.current.reset();
				return;
			}
			const formValues = Object.fromEntries(formData.entries());
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={className} variant={variant} size={size}>
					{message || "Contact Us"}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
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
						<Button type="submit" onClick={(e) => sendMail(e)}>
							Send Message
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
