import React from "react";
import { useParams } from "react-router-dom";
import { books } from "../../../assets/DummyData";

export default function Book(id: number) {
	const book = books.find((item) => item.id === id);

	if (!book) {
		return <div>Book not found</div>;
	}

	return (
		<div>
			<h2>{book.name}</h2>
			<p>Author: {book.author}</p>
			<p>Language: {book.language}</p>
			<p>Edition: {book.edition}</p>
			<p>Summary: {book.summary}</p>
			<img src={book.image} alt={book.name} />
			<p>Quantity Required: {book.quantity}</p>
		</div>
	);
}
