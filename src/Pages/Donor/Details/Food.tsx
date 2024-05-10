import React from 'react';
import { useParams } from 'react-router-dom';
import { foods } from '../../../assets/dummyData';

export default function Food() {
	const { id } = useParams<{ id: string }>();
	const food = foods.find((item) => item.id.toString() === id);
	if (!food) {
		return <div>Food not found!</div>;
	}
	return (
		<div>
			<h1>{food.name}</h1>
			<p>
				Quantity: {food.quantity}{' '}
				{food.type === 'fruits and vegtables' ? 'KG' : 'Amount'}
			</p>
			<p>Type: {food.type}</p>
		</div>
	);
}
