"use client";
import { useRouter } from "next/navigation";

export default function Login() {
	const router = useRouter();
	const handleClick = () => {
		router.push("/");
	};
	return (
		<div>
			<h1>Inciar Sesión</h1>
			<button onClick={handleClick}>Regresar al Home</button>
		</div>
	);
}
