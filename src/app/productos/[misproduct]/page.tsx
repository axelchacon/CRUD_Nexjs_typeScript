import { Metadata } from "next";

type Props = {
	params: {
		misproduct: string;
	};
};

export const generateMetadata = ({ params }: Props): Metadata => {
	return {
		title: `Producto ${params.misproduct}`,
	};
};

export default function ProductDetail({ params }: Props) {
	return <h1>Productos {params.misproduct}</h1>;
}
