"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const themes = [
		{ id: "light", icon: Sun },
		{ id: "system", icon: Monitor },
		{ id: "dark", icon: Moon },
	] as const;

	return (
		<div role="group" aria-label="Theme" className="glass-surface inline-flex items-center gap-1 rounded-xl p-1">
			{themes.map(({ id, icon: Icon }) => (
				<button
					type="button"
					key={id}
					onClick={() => setTheme(id)}
					className={`flex items-center justify-center p-2 rounded-lg border transition-colors duration-200 ${
						mounted && theme === id
							? "bg-primary/10 border-primary/30 text-primary"
							: "border-transparent text-foreground/60 hover:text-primary hover:bg-primary/5"
					}`}
					aria-label={`Switch to ${id} theme`}
					aria-pressed={mounted && theme === id}
				>
					<Icon className="w-4 h-4" aria-hidden="true" />
				</button>
			))}
		</div>
	);
};

export default DarkModeSwitch;