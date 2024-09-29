import "./global.css";
import { Metadata } from "next";
import Link from "next/link";

// export const metadata = {
// 	title: "Next.js",
// 	description: "Generated by Next.js",
// };

export const metadata: Metadata = {
	title: {
		default: "Aprendiendo Next.js",
		absolute: "",
		template: "%s - Aprendiendo Next.js",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<header>
					<h2>Cabecera de la app</h2>
					<nav>
						<Link href="/">Home</Link>-<Link href="/acerca">Acerca</Link>-
						<Link href="/contacto">Contacto</Link>-
						<Link href="/productos">Productos</Link>-
						<Link href="/login">Login</Link>-
						<Link href="/registro">Registro</Link>-
						<Link href="/password">Recuperar Password</Link>
					</nav>
				</header>
				<main>{children}</main>
				<footer> Este es el footer</footer>
			</body>
		</html>
	);
}
