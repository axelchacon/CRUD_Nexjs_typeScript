export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<header>Cabecera del Blog</header>
			<main>
				<section>{children}</section>
				<aside>
					<form action="">
						<input type="search" name="" id="" placeholder="Voy a Tra" />

						<input type="submit" value="Buscar" id="" />
					</form>
				</aside>
			</main>
			<footer> Este es el footer del blog</footer>
		</>
	);
}
