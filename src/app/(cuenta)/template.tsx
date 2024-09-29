"use client";

import { useState } from "react";

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [input, setInput] = useState("");
	return (
		<>
			<h2>Rutas Relativas</h2>
			{children}
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}></input>
		</>
	);
}
