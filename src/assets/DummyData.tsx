const adminUser = {
	id: 1,
	username: "admin",
	password: "password123",
	email: "admin@example.com",
};

const organizations = [
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
];

const donations = [
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
