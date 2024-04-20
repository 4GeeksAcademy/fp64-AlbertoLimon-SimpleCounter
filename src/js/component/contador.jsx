import React from "react";

const Contador = ({counterState}) => {

	return (
		<div className="container-fluid bg-dark contenedor d-flex flex-row justify-content-around px-4 py-4">
			<div className="border border-white bg-secondary">
			<h1 className="text-white">Contador:</h1>
			</div>
			<div className="border border-white bg-secondary">
				<h1 className="text-white">{counterState}</h1>
			</div>
		</div>
	);
};

export default Contador;