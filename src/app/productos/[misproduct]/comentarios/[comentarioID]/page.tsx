export default function CommentDetail({
	params,
}: {
	params: {
		misproduct: string;
		comentarioID: string;
	};
}) {
	return (
		<h1>
			Comentario {params.comentarioID} del Producto {params.misproduct}
		</h1>
	);
}
