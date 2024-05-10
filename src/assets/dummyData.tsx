import {
	TBloodDonation,
	TClothesItem,
	TFoodItem,
	TMedicalCase,
	TMedicineSupplies,
	TStationaryItem,
	TTeachingPost,
	TToyItem,
	User,
	Organization,
	Donor,
} from '../types';

import lego from '../assets/Images/board-games.jpg';

export const credentials: User[] = [
	{
		type: 'admin',
		username: 'admin',
		password: 'admin123',
	},
	{
		type: 'donor',
		username: 'donor',
		password: 'donor123',
	},
	{
		type: 'organisation',
		username: 'organisation',
		password: 'organisation123',
	},
];

export const organizations: Organization[] = [
	{
		id: 1,
		name: 'Hope Shelter',
		type: 'Non-profit',

		street: '123 Main St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',

		contactEmail: 'hope@shelter.com',
		status: 'approved',
	},

	{
		id: 2,
		name: 'Salvation Army',
		type: 'Non-profit',

		street: '789 Oak St',
		city: 'Othertown',
		state: 'NY',
		zip: '12345',

		contactEmail: 'sal@gmail.com',
		status: 'approved',
	},
	{
		id: 3,
		name: 'Goodwill',
		type: 'Non-profit',

		street: '456 Elm St',
		city: 'Another Town',
		state: 'TX',
		zip: '12345',

		contactEmail: 'GOOd@gmail.com',
		status: 'pending',
	},
	{
		id: 4,
		name: 'Red Cross',
		type: 'Non-profit',

		street: '101 Pine St',
		city: 'Anytown',
		state: 'CA',
		zip: '12345',

		contactEmail: 'red@gmail.com',
		status: 'pending',
	},
	{
		id: 5,
		name: 'Dope Shelter',
		type: 'Non-profit',

		street: '123 unrad St',
		city: 'Anytown',
		state: 'TX',
		zip: '12345',

		contactEmail: 'dope@shelter.com',
		status: 'approved',
	},
	{
		id: 6,
		name: 'X shelter',
		type: 'Profit',

		street: '789 rad St',
		city: 'Anytown',
		state: 'NY',
		zip: '12345',

		contactEmail: 'x@gmail.com',
		status: 'approved',
	},
	{
		id: 7,
		name: 'Future Shelter',
		type: 'Profit',

		street: '789 Rad St',
		city: 'Othertown',
		state: 'CA',
		zip: '12345',

		contactEmail: 'fut@gmail.com',
		status: 'approved',
	},
	{
		id: 8,
		name: 'World Shelter',
		type: 'Non-profit',

		street: '144 Sun St',
		city: 'Another Town',
		state: 'TX',
		zip: '12345',

		contactEmail: 'wa@gmail.com',
		status: 'approved',
	},
];

export const donor: Donor[] = [
	{
		firstname: 'Amr',
		secondname: 'Hossam',
		address: '123 Elm St, Anytown, CA 12345',
		email: 'amr@gmail.com',
	},
	{
		firstname: 'Nada',
		secondname: 'Saleh',
		address: '143 Pine St, Anytown, CA 12345',
		email: 'nada@gmail.com',
	},
	{
		firstname: 'Salma',
		secondname: 'Ahmed',
		address: '154 Sec St, Wheretown, CA 12345',
		email: 'salama@gmail.com',
	},
	{
		firstname: 'Dalia',
		secondname: 'Habib',
		address: '167 Cosec St, Howtown, CA 12345',
		email: 'dalia@gmail.com',
	},
	{
		firstname: 'Tia',
		secondname: 'Abdelrahman',
		address: '148 Pint St, Whytown, CA 12345',
		email: 'tia@gmail.com',
	},
	{
		firstname: 'Hala',
		secondname: 'Ashraf',
		address: '196 Live St, Whentown, CA 12345',
		email: 'hala@gmail.com',
	},
	{
		firstname: 'Noor',
		secondname: 'Ismail',
		address: '134 Hello St, Thentown, CA 12345',
		email: 'noor@gmail.com',
	},
	{
		firstname: 'Jannah',
		secondname: 'Omar',
		address: '189 Bye St, Theirtown, CA 12345',
		email: 'jannah@gmail.com',
	},
	{
		firstname: 'Ahmed',
		secondname: 'Mostafa',
		address: '33 Why St, Nevertown, CA 12345',
		email: 'ahmed@gmail.com',
	},
	{
		firstname: 'Ali',
		secondname: 'Basha',
		address: '69 Okay St, Yestown, CA 12345',
		email: 'ali@gmail.com',
	},
];
export const foods: TFoodItem[] = [
	{
		id: 1,
		name: 'Canned Food',
		type: 'General',
		quantity: 50,
		img: 'image1.jpg',
	},
	{
		id: 2,
		name: 'Fresh Produce',
		type: 'General',
		quantity: 30,
		img: 'image2.jpg',
	},
	{
		id: 3,
		name: 'Frozen Food',
		type: 'General',
		quantity: 20,
		img: 'image3.jpg',
	},
];

export const medicalSupplies: TMedicineSupplies[] = [
	{
		id: 1,
		name: 'Masks',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
		use: 'General',
	},
	{
		id: 2,
		name: 'Gloves',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
		use: 'General',
	},
	{
		id: 3,
		name: 'Sanitizer',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
		use: 'General',
	},
];
export const schoolSupplies: TStationaryItem[] = [
	{
		id: 1,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
	},
	{
		id: 2,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
	},
	{
		id: 3,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
	},
];

export const bloodCases: TBloodDonation[] = [
	{
		id: 1,
		name: 'item 1',
		quantity: 100,
		img: 'image1.jpg',
		bloodType: 'O+',
		hospital: 'Hospital 1',
		area: 'Area 1',
		gov: 'Gov 1',
		address: 'Address 1',
	},
	{
		id: 2,
		name: 'item 2',
		bloodType: 'A+',
		quantity: 50,
		img: 'image2.jpg',
		hospital: 'Hospital 2',
		area: 'Area 2',
		gov: 'Gov 2',
		address: 'Address 2',
	},
	{
		id: 3,
		name: 'item 3',
		bloodType: 'B+',
		quantity: 30,
		img: 'image3.jpg',
		hospital: 'Hospital 3',
		area: 'Area 3',
		gov: 'Gov 3',
		address: 'Address 3',
	},
];

export const teachingPosts: TTeachingPost[] = [
	{
		id: 1,
		name: 'Math Teacher',
		quantity: 1,
		img: 'image1.jpg',
		subject: 'Math',
		students: 30,
		address: 'Address 1',
	},
	{
		id: 2,
		name: 'Science Teacher',
		quantity: 1,
		img: 'image2.jpg',
		subject: 'Science',
		students: 40,
		address: 'Address 2',
	},
	{
		id: 3,
		name: 'English Teacher',
		quantity: 1,
		img: 'image3.jpg',
		subject: 'English',
		students: 50,
		address: 'Address 3',
	},
];

export const medicalCases: TMedicalCase[] = [
	{
		id: 1,
		name: 'Covid-19',
		quantity: 100,
		img: 'image1.jpg',
		patientName: 'John Doe',
		age: 30,
		gender: 'male',
		weight: 150,
		location: 'Hospital 1',
		address: 'Address 1',
		specialty: 'General',
		description: 'Description 1',
		orgName: 'Org 1',
	},
	{
		id: 2,
		name: 'Covid-19',
		quantity: 200,
		img: '',
		patientName: 'John Doe',
		age: 50,
		gender: 'male',
		weight: 90,
		location: 'Hospital 2',
		address: 'Address 2',
		specialty: 'throat',
		description: 'Description 2',
		orgName: 'Org 2',
	},
	{
		id: 3,
		name: 'Covid-19',
		quantity: 100,
		img: 'image1.jpg',
		patientName: 'John Doe',
		age: 50,
		gender: 'female',
		weight: 300,
		location: 'Hospital 3',
		address: 'Address 3',
		specialty: 'back',
		description: 'Description 3',
		orgName: 'Org 3',
	},
	{
		id: 4,
		name: 'Covid-19',
		quantity: 100,
		img: 'image1.jpg',
		patientName: 'John Doe',
		age: 50,
		gender: 'male',
		weight: 300,
		location: 'Hospital 3',
		address: 'Address 3',
		specialty: 'back',
		description: 'Description 3',
		orgName: 'Org 3',
	},
];

export const toys: TToyItem[] = [
	{
		id: 1,
		name: 'Lego',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: lego,
		gender: 'male',
		category: 'board games',
	},
	{
		id: 2,
		name: 'Barbie',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: 'image2.jpg',
		gender: 'female',
		category: 'dolls',
	},
	{
		id: 3,
		name: 'Hot Wheels',
		type: 'General',
		ageGroup: 'All',
		quantity: 30,
		img: 'image3.jpg',
		gender: 'all',
		category: 'cars',
	},
	{
		id: 4,
		name: 'Basketball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: 'image4.jpg',
		category: 'sports',
		gender: 'all',
	},
	{
		id: 5,
		name: 'Soccer Ball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: 'image5.jpg',
		category: 'sports',
		gender: 'all',
	},
	{
		id: 6,
		name: 'Bicycle',
		type: 'General',
		ageGroup: '+12',
		quantity: 10,
		img: 'image6.jpg',
		category: 'Outdoor',
		gender: 'all',
	},
	{
		id: 7,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
	{
		id: 8,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
	{
		id: 9,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
	{
		id: 10,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
	{
		id: 11,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
	{
		id: 12,
		name: 'Car',
		type: '',
		ageGroup: '+12',
		quantity: 30,
		img: '',
		category: 'cars',
		gender: 'male',
	},
];
export const clothes: TClothesItem[] = [
	{
		id: 1,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
		size: 'M',
	},
	{
		id: 2,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
		size: 'L',
	},
	{
		id: 3,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
		size: 'S',
	},
	{
		id: 4,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
		size: 'M',
	},
	{
		id: 5,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
		size: 'L',
	},
	{
		id: 6,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
		size: 'S',
	},
	{
		id: 7,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
		size: 'M',
	},
	{
		id: 8,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
		size: 'L',
	},
	{
		id: 9,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
		size: 'S',
	},
	{
		id: 10,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: 'image1.jpg',
		size: 'M',
	},
	{
		id: 11,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: 'image2.jpg',
		size: 'L',
	},
	{
		id: 12,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: 'image3.jpg',
		size: 'S',
	},
];
