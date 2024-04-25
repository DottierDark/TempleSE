import {
	TBloodDonation,
	TBookItem,
	TClothesItem,
	TDonationItem,
	TFoodItem,
	TMedicalCase,
	TMedicineSupplies,
	TStationaryItem,
	TTeachingPost,
	TToyItem,
} from "../types";

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

export const books: TBookItem[] = [];
export const foods: TFoodItem[] = [
	{
		id: 1,
		name: "Canned Food",
		type: "General",
		quantity: 50,
		img: "image1.jpg",
	},
	{
		id: 2,
		name: "Fresh Produce",
		type: "General",
		quantity: 30,
		img: "image2.jpg",
	},
	{
		id: 3,
		name: "Frozen Food",
		type: "General",
		quantity: 20,
		img: "image3.jpg",
	},
];

export const medicalSupplies: TMedicineSupplies[] = [
	{
		id: 1,
		name: "Masks",
		type: "General",
		quantity: 100,
		img: "image1.jpg",
		use: "General",
	},
	{
		id: 2,
		name: "Gloves",
		type: "General",
		quantity: 50,
		img: "image2.jpg",
		use: "General",
	},
	{
		id: 3,
		name: "Sanitizer",
		type: "General",
		quantity: 30,
		img: "image3.jpg",
		use: "General",
	},
];
export const schoolSupplies: TStationaryItem[] = [
	{
		id: 1,
		name: "Pencils",
		type: "General",
		quantity: 100,
		img: "image1.jpg",
	},
	{
		id: 2,
		name: "Notebooks",
		type: "General",
		quantity: 50,
		img: "image2.jpg",
	},
	{
		id: 3,
		name: "Backpacks",
		type: "General",
		quantity: 30,
		img: "image3.jpg",
	},
];

export const bloodCases: TBloodDonation[] = [
	{
		id: 1,
		name: "item 1",
		quantity: 100,
		img: "image1.jpg",
		bloodType: "O+",
		hospital: "Hospital 1",
		area: "Area 1",
		gov: "Gov 1",
		address: "Address 1",
	},
	{
		id: 2,
		name: "item 2",
		bloodType: "A+",
		quantity: 50,
		img: "image2.jpg",
		hospital: "Hospital 2",
		area: "Area 2",
		gov: "Gov 2",
		address: "Address 2",
	},
	{
		id: 3,
		name: "item 3",
		bloodType: "B+",
		quantity: 30,
		img: "image3.jpg",
		hospital: "Hospital 3",
		area: "Area 3",
		gov: "Gov 3",
		address: "Address 3",
	},
];

export const teachingPosts: TTeachingPost[] = [
	{
		id: 1,
		name: "Math Teacher",
		quantity: 1,
		img: "image1.jpg",
		subject: "Math",
		students: 30,
		address: "Address 1",
	},
	{
		id: 2,
		name: "Science Teacher",
		quantity: 1,
		img: "image2.jpg",
		subject: "Science",
		students: 40,
		address: "Address 2",
	},
	{
		id: 3,
		name: "English Teacher",
		quantity: 1,
		img: "image3.jpg",
		subject: "English",
		students: 50,
		address: "Address 3",
	},
];

export const medicalCases: TMedicalCase[] = [
	{
		id: 1,
		name: "Covid-19",
		quantity: 100,
		img: "image1.jpg",
		patientName: "John Doe",
		age: 30,
		gender: "male",
		weight: 150,
		location: "Hospital 1",
		address: "Address 1",
		specialty: "General",
		description: "Description 1",
		orgName: "Org 1",
	},
	{
		id: 2,
		name: "Covid-19",
		quantity: 200,
		img: "",
		patientName: "John Doe",
		age: 50,
		gender: "male",
		weight: 90,
		location: "Hospital 2",
		address: "Address 2",
		specialty: "throat",
		description: "Description 2",
		orgName: "Org 2",
	},
	{
		id: 3,
		name: "Covid-19",
		quantity: 100,
		img: "image1.jpg",
		patientName: "John Doe",
		age: 50,
		gender: "female",
		weight: 300,
		location: "Hospital 3",
		address: "Address 3",
		specialty: "back",
		description: "Description 3",
		orgName: "Org 3",
	},
];

export const toys: TToyItem[] = [
	{
		id: 1,
		name: "Lego",
		type: "General",
		ageGroup: "All",
		quantity: 100,
		img: "image1.jpg",
		gender: "male",
		category: "board games",
	},
	{
		id: 2,
		name: "Barbie",
		type: "General",
		ageGroup: "+3",
		quantity: 50,
		img: "image2.jpg",
		gender: "female",
		category: "dolls",
	},
	{
		id: 3,
		name: "Hot Wheels",
		type: "General",
		ageGroup: "All",
		quantity: 30,
		img: "image3.jpg",
		gender: "all",
		category: "cars",
	},
];
export const clothes: TClothesItem[] = [
	{
		id: 1,
		name: "Shirt",
		type: "General",
		quantity: 100,
		img: "image1.jpg",
		size: "M",
	},
	{
		id: 2,
		name: "Pants",
		type: "General",
		quantity: 50,
		img: "image2.jpg",
		size: "L",
	},
	{
		id: 3,
		name: "Jacket",
		type: "General",
		quantity: 30,
		img: "image3.jpg",
		size: "S",
	},
];

export const toysFilterOptions = [
	{
		name: "Age Group",
		options: ["All", "+3", "+5", "+7", "+9", "+12"],
	},
	{
		name: "Category",
		options: [
			"board games",
			"stuffed toys",
			"dolls",
			"sports",
			"cars",
			"Outdoor",
		],
	},
	{
		name: "Gender",
		options: ["all", "female", "male"],
	},
];