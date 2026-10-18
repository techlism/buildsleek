import { cn } from "@/lib/utils";
import Image from "next/image";

type BrowserFrameProps = {
	src: string;
	alt: string;
	url: string;
	priority?: boolean;
	sizes?: string;
	className?: string;
};

export function BrowserFrame({
	src,
	alt,
	url,
	priority,
	sizes,
	className,
}: BrowserFrameProps) {
	return (
		<div
			className={cn(
				"overflow-hidden rounded-xl border border-primary/20 bg-background/80 shadow-[0_24px_60px_-28px_hsl(var(--primary)/0.45)]",
				className,
			)}
		>
			<div className="flex items-center gap-3 border-b border-primary/15 bg-background/70 px-3 py-2">
				<div className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
					<span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
					<span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
				</div>
				<div className="flex-1 truncate rounded-md bg-foreground/[0.06] px-3 py-1 text-center text-[11px] font-medium text-foreground/55">
					{url}
				</div>
				<div className="w-[42px]" />
			</div>
			<Image
				src={src}
				alt={alt}
				width={1600}
				height={1000}
				priority={priority}
				sizes={sizes ?? "(min-width: 1024px) 60vw, 100vw"}
				className="block h-auto w-full"
			/>
		</div>
	);
}

type PhoneFrameProps = {
	src: string;
	alt: string;
	statusBar?: string;
	className?: string;
	sizes?: string;
};

// Screen position inside /frames/phone.svg (viewBox 72.5 x 150), as percentages of the frame.
// The screenshot starts just below the camera cutout, like a real status bar.
export function PhoneFrame({
	src,
	alt,
	statusBar = "#fdfdfd",
	className,
	sizes,
}: PhoneFrameProps) {
	return (
		<div
			className={cn(
				"relative aspect-[72.5/150] drop-shadow-[0_22px_30px_hsl(var(--primary)/0.35)]",
				className,
			)}
		>
			<div
				className="absolute left-[4.02%] top-[1.64%] h-[96.71%] w-[91.97%] overflow-hidden rounded-[15%/7%]"
				style={{ backgroundColor: statusBar }}
			>
				<Image
					src={src}
					alt={alt}
					width={585}
					height={1266}
					sizes={sizes ?? "220px"}
					className="absolute inset-x-0 top-[5.2%] block h-auto w-full"
				/>
			</div>
			{/* Frame by Rafael Fernandez, CC BY-SA 4.0, screen made transparent. Credited in the footer. */}
			<img
				src="/frames/phone.svg"
				alt=""
				aria-hidden
				className="pointer-events-none absolute inset-0 h-full w-full"
			/>
		</div>
	);
}
