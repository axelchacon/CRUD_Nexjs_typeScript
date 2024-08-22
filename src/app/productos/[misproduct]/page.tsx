export default function ProductDetail({
	params,
}: {
	params: {
		misproduct: string;
	};
}) {
	return <h1>Productos {params.misproduct}</h1>;
}
