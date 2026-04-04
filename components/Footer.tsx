import DarkModeSwitch from "./DarkModeSwitch";

export default async function Footer() {
	return (
		<footer
			className="w-full mx-auto mt-14 glass-surface rounded-2xl"
			id="footer"
		>
			<div className="container mx-auto p-5 flex align-middle items-center flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between">
				<div className="flex flex-col items-center space-y-4 opacity-85">
					<p className="text-center">© 2026 BuildSleek. All rights reserved.</p>
					<p className="text-center">Made with ❤️ by the BuildSleek team</p>
				</div>
				<div>
					<DarkModeSwitch />
				</div>
			</div>
		</footer>
	);
}
