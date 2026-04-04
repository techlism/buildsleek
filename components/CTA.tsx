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
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { HTMLProps, useRef, useState } from "react";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

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

	const [mailSentStatus, setMailSentStatus] = useState<"success" | "error" | null>(null);
	const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
	const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
	const [isSending, setIsSending] = useState<boolean>(false); // Loading state
	const [open, setOpen] = useState(false);

	const validateEmail = (email: string) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailPattern.test(email);
	};

	const validateForm = () => {
		const errors: { name?: string; email?: string; message?: string } = {};

		if (!formValues.name.trim() || formValues.name.trim().length < 2) {
			errors.name = "Please enter your full name.";
		}

		if (!validateEmail(formValues.email)) {
			errors.email = "Please enter a valid email address.";
		}

		if (!formValues.message.trim() || formValues.message.trim().length < 10) {
			errors.message = "Please add a short message (at least 10 characters).";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const resetFormState = () => {
		setFormErrors({});
		setMailSentStatus(null);
		setIsSending(false);
		setFormValues({ name: "", email: "", message: "" });
	};

	const handleDialogOpenChange = (nextOpen: boolean) => {
		setOpen(nextOpen);
		if (!nextOpen) {
			resetFormState();
		}
	};

	async function sendMail(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setMailSentStatus(null);

		if (!validateForm()) {
			return;
		}

		if (formRef.current) {
			setIsSending(true);

			try {
				const response = await fetch("/api/send-mail", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: formValues.name.trim(),
						email: formValues.email.trim(),
						message: formValues.message.trim(),
					}),
				});

				if (response.ok) {
					setMailSentStatus("success");
					setFormErrors({});
					setFormValues({ name: "", email: "", message: "" });
				} else {
					setMailSentStatus("error");
				}
			} catch {
				setMailSentStatus("error");
			} finally {
				setIsSending(false); // Set loading state to false
			}
		}
	}

	return (
		<Dialog open={open} onOpenChange={handleDialogOpenChange}>
			<DialogTrigger asChild>
				<Button className={cn('group rounded-xl px-4 py-6', className)} variant={variant ? variant : 'default'}>
					{message || "Contact Us"}
					<ArrowRight className="group-hover:-rotate-45 group-hover:transition-transform group-hover:duration-200" />
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-[315px] sm:max-w-[440px] mx-auto rounded-xl glass-surface">
				<DialogHeader>
					<DialogTitle className="text-xl">Reach Out to Us</DialogTitle>
					<DialogDescription className="font-medium text-base text-foreground/75">
						Got a question, a project, or just want to say hi? Drop us a message
						through the form below
						. We will get back to you at the earliest.
					</DialogDescription>
				</DialogHeader>
				{mailSentStatus === "success" ? (
					<div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-center space-y-2">
						<CheckCircle2 className="mx-auto h-8 w-8 text-primary" />
						<p className="text-sm font-semibold text-foreground">Message sent successfully.</p>
						<p className="text-sm text-foreground/75">We will reach out to you shortly.</p>
						<Button className="mt-1" onClick={() => setOpen(false)}>Close</Button>
					</div>
				) : mailSentStatus === "error" ? (
					<p className="text-sm font-medium p-2 text-center rounded-lg bg-destructive text-destructive-foreground">
						Failed to send the message. Please try again.
					</p>
				) : (
					<form ref={formRef} className="grid gap-4 py-4" onSubmit={sendMail}>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<div className="col-span-3 space-y-1">
								<Input
									id="name"
									name="name"
									placeholder="John Doe"
									value={formValues.name}
									onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
								/>
								{formErrors.name && <p className="text-xs text-destructive">{formErrors.name}</p>}
							</div>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="email" className="text-right">
								Email
							</Label>
							<div className="col-span-3 space-y-1">
								<Input
									id="email"
									name="email"
									placeholder="john.doe@example.com"
									type="email"
									value={formValues.email}
									onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
									required
								/>
								{formErrors.email && <p className="text-xs text-destructive">{formErrors.email}</p>}
							</div>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="message" className="text-right">
								Message
							</Label>
							<div className="col-span-3 space-y-1">
								<Textarea
									id="message"
									name="message"
									placeholder="What's on your mind?"
									value={formValues.message}
									onChange={(e) => setFormValues((prev) => ({ ...prev, message: e.target.value }))}
								/>
								{formErrors.message && <p className="text-xs text-destructive">{formErrors.message}</p>}
							</div>
						</div>
						<DialogFooter>
							<Button
								type="submit"
								disabled={isSending}
								className="rounded-xl px-4 py-6"
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
