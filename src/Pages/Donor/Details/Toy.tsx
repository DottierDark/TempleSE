import React from "react";
import { useParams } from "react-router-dom";
import { toys } from "../../../assets/DummyData";

export default function Toy(id: number) {
	const toy = toys.find((item) => item.id === id);
	if (!toy) {
		return <div>Toy not found!</div>;
	}
	return (
		<div>
			<h1>{toy.name}</h1>
			<p>Brand: {toy.brand}</p>
			<p>Age: {toy.age}</p>
			<p>Type: {toy.type}</p>
			<p>Quantity: {toy.quantity}</p>
		</div>
	);
}
