import React from "react";
import { useParams } from "react-router-dom";
import { medicalSupplies } from "../../../assets/dummyData";

export default function Medical(id: number) {
	const supply = medicalSupplies.find((item) => item.id === id);
	if (!supply) {
		return <div>Medical Supplies not found!</div>;
	}
	return (
		<div>
			<p>Quantity: {supply.quantity}</p>
			<p>Type: {supply.type}</p>
			<p>Use: {supply.use}</p>
		</div>
	);
}
