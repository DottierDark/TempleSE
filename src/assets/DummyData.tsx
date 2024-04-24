export const adminUser = {
	id: 1,
	username: "admin",
	password: "password123",
	email: "admin@example.com",
};

export const organizations = [
	{
		id: 1,
		name: "Hope Shelter",
		type: "Non-profit",
		address: {
			street: "123 Main St",
			city: "Anytown",
			state: "CA",
			zip: "12345",
		},
		contactEmail: "hope@shelter.com",
		status: "Approved",
	},
	{
		id: 2,
		name: "Goodwill",
		type: "Non-profit",
		address: {
			street: "456 Elm St",
			city: "Anytown",
			state: "CA",
			zip: "12345",
		},
		contactEmail: "GOOd@gmail.com",
		status: "Pending",
	},
	{
		id: 3,
		name: "Salvation Army",
		type: "Non-profit",
		address: {
			street: "789 Oak St",
			city: "Anytown",
			state: "CA",
			zip: "12345",
		},
		contactEmail: "sal@gmail.com",
		status: "Approved",
	},
	{
		id: 4,
		name: "Red Cross",
		type: "Non-profit",
		address: {
			street: "101 Pine St",
			city: "Anytown",
			state: "CA",
			zip: "12345",
		},
		contactEmail: "red@gmail.com",
		status: "Pending",
	},
];

export const donations = [
	{
		id: 1,
		organizationId: 1,
		category: "Clothes",
		title: "Winter Coats",
		description: "Gently used winter coats for all sizes",
		quantity: 10,
		images: ["image1.jpg", "image2.jpg"],
		status: "Pending",
	},
	{
		id: 2,
		organizationId: 2,
		category: "Furniture",
		title: "Couch",
		description: "Gently used couch",
		quantity: 1,
		images: ["image3.jpg", "image4.jpg"],
		status: "Approved",
	},
	{
		id: 3,
		organizationId: 3,
		category: "Electronics",
		title: "Laptop",
		description: "Gently used laptop",
		quantity: 1,
		images: ["image5.jpg", "image6.jpg"],
		status: "Pending",
	},
];
export const books = [
	{
		id: 1,
		name: "The Alchemist",
		author: "Paulo Coelho",
		language: "English",
		edition: "1st",
		summary: "A story about following your dreams",
		image: "image1.jpg",
		quantity: 5,
	},
	{
		id: 2,
		name: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		language: "English",
		edition: "1st",
		summary: "A story about the American Dream",
		image: "image2.jpg",
		quantity: 10,
	},
	{
		id: 3,
		name: "Pride and Prejudice",
		author: "Jane Austen",
		language: "English",
		edition: "1st",
		summary: "A story about love and class",
		image: "image3.jpg",
		quantity: 7,
	},
];

export const toys = [
	{
		id: 1,
		name: "LEGO Classic Creative Bricks",
		brand: "LEGO",
		age: "4+",
		type: "Building",
		quantity: 10,
	},
	{
		id: 2,
		name: "Barbie Dreamhouse",
		brand: "Barbie",
		age: "3+",
		type: "Doll",
		quantity: 5,
	},
	{
		id: 3,
		name: "Hot Wheels Track Builder",
		brand: "Hot Wheels",
		age: "5+",
		type: "Car",
		quantity: 8,
	},
];
export const foods = [
	{
		id: 1,
		name: "Canned Soup",
		quantity: 10,
		type: "Non-perishable",
	},
	{
		id: 2,
		name: "Fresh Fruit",
		quantity: 20,
		type: "Perishable",
	},
	{
		id: 3,
		name: "Pasta",
		quantity: 15,
		type: "Non-perishable",
	},
];

export const medicalSupplies = [
	{
		id: 1,
		type: "Masks",
		quantity: 100,
		use: "General",
		imgsrc: "image1.jpg",
	},
	{
		id: 2,
		type: "Gloves",
		quantity: 200,
		use: "General",
		imgsrc: "image1.jpg",
	},
	{
		id: 3,
		type: "Bandages",
		quantity: 50,
		use: "General",
		imgsrc: "image1.jpg",
	},
];
