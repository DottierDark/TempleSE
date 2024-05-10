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

{
	/* Toys list Images*/
}
import BoardGames from '../assets/Images/Donor/Lists/Toys/board-games.jpg';
import Dolls from '../assets/Images/Donor/Lists/Toys/dolls.jpeg';
import Cars from '../assets/Images/Donor/Lists/Toys/cars.jpeg';
import Outdoor from '../assets/Images/Donor/Lists/Toys/outdoor.jpeg';
import Sports from '../assets/Images/Donor/Lists/Toys/sports.jpeg';

{
	/* Clothes list Images*/
}
import Jackets from '../assets/Images/Donor/Lists/Clothes/jackets.jpeg';
import Pants from '../assets/Images/Donor/Lists/Clothes/pants.jpeg';
import Shirts from '../assets/Images/Donor/Lists/Clothes/tshirts.jpeg';

{
	/* Food list Images*/
}
import Canned from '../assets/Images/Donor/Lists/Food/canned.jpeg';
import Fresh from '../assets/Images/Donor/Lists/Food/fresh.jpeg';
import Frozen from '../assets/Images/Donor/Lists/Food/frozen.jpeg';

{
	/* Medical Supplies list Images*/
}
import Masks from '../assets/Images/Donor/Lists/MedicalSupplies/masks.jpeg';
import Gloves from '../assets/Images/Donor/Lists/MedicalSupplies/gloves.jpeg';
import Sanitizer from '../assets/Images/Donor/Lists/MedicalSupplies/sanitizer.jpeg';

{
	/* School Supplies list Images*/
}
import Pencils from '../assets/Images/Donor/Lists/School/pencils.jpeg';
import Notebooks from '../assets/Images/Donor/Lists/School/Notebooks.jpeg';
import Backpacks from '../assets/Images/Donor/Lists/School/backpacks.jpeg';

{
	/* Blood list Images*/
}

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
		status : "pending",
	},
	{
		firstname: 'Nada',
		secondname: 'Saleh',
		address: '143 Pine St, Anytown, CA 12345',
		email: 'nada@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Salma',
		secondname: 'Ahmed',
		address: '154 Sec St, Wheretown, CA 12345',
		email: 'salama@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Dalia',
		secondname: 'Habib',
		address: '167 Cosec St, Howtown, CA 12345',
		email: 'dalia@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Tia',
		secondname: 'Abdelrahman',
		address: '148 Pint St, Whytown, CA 12345',
		email: 'tia@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Hala',
		secondname: 'Ashraf',
		address: '196 Live St, Whentown, CA 12345',
		email: 'hala@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Noor',
		secondname: 'Ismail',
		address: '134 Hello St, Thentown, CA 12345',
		email: 'noor@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Jannah',
		secondname: 'Omar',
		address: '189 Bye St, Theirtown, CA 12345',
		email: 'jannah@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Ahmed',
		secondname: 'Mostafa',
		address: '33 Why St, Nevertown, CA 12345',
		email: 'ahmed@gmail.com',
		status : "pending",
	},
	{
		firstname: 'Ali',
		secondname: 'Basha',
		address: '69 Okay St, Yestown, CA 12345',
		email: 'ali@gmail.com',
		status : "pending",
	},
];
export const foods: TFoodItem[] = [
	{
		id: 1,
		name: 'Canned Food',
		type: 'General',
		quantity: 50,
		img: Canned,
	},
	{
		id: 2,
		name: 'Fresh Produce',
		type: 'General',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 3,
		name: 'Frozen Food',
		type: 'General',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 4,
		name: 'Canned Food',
		type: 'General',
		quantity: 50,
		img: Canned,
	},
	{
		id: 5,
		name: 'Fresh Produce',
		type: 'General',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 6,
		name: 'Frozen Food',
		type: 'General',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 7,
		name: 'Canned Food',
		type: 'General',
		quantity: 50,
		img: Canned,
	},
	{
		id: 8,
		name: 'Fresh Produce',
		type: 'General',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 9,
		name: 'Frozen Food',
		type: 'General',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 10,
		name: 'Canned Food',
		type: 'General',
		quantity: 50,
		img: Canned,
	},
	{
		id: 11,
		name: 'Fresh Produce',
		type: 'General',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 12,
		name: 'Frozen Food',
		type: 'General',
		quantity: 20,
		img: Frozen,
	},
];

export const medicalSupplies: TMedicineSupplies[] = [
	{
		id: 1,
		name: 'Masks',
		type: 'General',
		quantity: 100,
		img: Masks,
		use: 'General',
	},
	{
		id: 2,
		name: 'Gloves',
		type: 'General',
		quantity: 50,
		img: Gloves,
		use: 'General',
	},
	{
		id: 3,
		name: 'Sanitizer',
		type: 'General',
		quantity: 30,
		img: Sanitizer,
		use: 'General',
	},
	{
		id: 4,
		name: 'Masks',
		type: 'General',
		quantity: 100,
		img: Masks,
		use: 'General',
	},
	{
		id: 5,
		name: 'Gloves',
		type: 'General',
		quantity: 50,
		img: Gloves,
		use: 'General',
	},
	{
		id: 6,
		name: 'Sanitizer',
		type: 'General',
		quantity: 30,
		img: Sanitizer,
		use: 'General',
	},
	{
		id: 7,
		name: 'Masks',
		type: 'General',
		quantity: 100,
		img: Masks,
		use: 'General',
	},
	{
		id: 8,
		name: 'Gloves',
		type: 'General',
		quantity: 50,
		img: Gloves,
		use: 'General',
	},
	{
		id: 9,
		name: 'Sanitizer',
		type: 'General',
		quantity: 30,
		img: Sanitizer,
		use: 'General',
	},
	{
		id: 10,
		name: 'Masks',
		type: 'General',
		quantity: 100,
		img: Masks,
		use: 'General',
	},
	{
		id: 11,
		name: 'Gloves',
		type: 'General',
		quantity: 50,
		img: Gloves,
		use: 'General',
	},
	{
		id: 12,
		name: 'Sanitizer',
		type: 'General',
		quantity: 30,
		img: Sanitizer,
		use: 'General',
	},
];
export const schoolSupplies: TStationaryItem[] = [
	{
		id: 1,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
	},
	{
		id: 2,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
	},
	{
		id: 3,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
	},
	{
		id: 4,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
	},
	{
		id: 5,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
	},
	{
		id: 6,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
	},
	{
		id: 7,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
	},
	{
		id: 8,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
	},
	{
		id: 9,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
	},
	{
		id: 10,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
	},
	{
		id: 11,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
	},
	{
		id: 12,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
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
		address: 'Any town',
	},
	{
		id: 2,
		name: 'Science Teacher',
		quantity: 1,
		img: 'image2.jpg',
		subject: 'Science',
		students: 40,
		address: 'Other Town',
	},
	{
		id: 3,
		name: 'English Teacher',
		quantity: 1,
		img: 'image3.jpg',
		subject: 'English',
		students: 50,
		address: 'Another Town',
	},
	{
		id: 4,
		name: 'Art Teacher',
		quantity: 1,
		img: 'image4.jpg',
		subject: 'Art',
		students: 60,
		address: 'Any town',
	},
	{
		id: 5,
		name: 'Music Teacher',
		quantity: 1,
		img: 'image5.jpg',
		subject: 'Music',
		students: 70,
		address: 'Another Town',
	},
	{
		id: 6,
		name: 'Physical Education Teacher',
		quantity: 1,
		img: 'image6.jpg',
		subject: 'Physical Education',
		students: 80,
		address: 'Other Town',
	},
	{
		id: 7,
		name: 'Math Teacher',
		quantity: 1,
		img: 'image1.jpg',
		subject: 'Math',
		students: 30,
		address: 'Any town',
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
		img: BoardGames,
		gender: 'male',
		category: 'board games',
	},
	{
		id: 2,
		name: 'Barbie',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Dolls,
		gender: 'female',
		category: 'dolls',
	},
	{
		id: 3,
		name: 'Hot Wheels',
		type: 'General',
		ageGroup: 'All',
		quantity: 30,
		img: Cars,
		gender: 'all',
		category: 'cars',
	},
	{
		id: 4,
		name: 'Basketball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: Sports,
		category: 'sports',
		gender: 'all',
	},
	{
		id: 5,
		name: 'Soccer Ball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: Sports,
		category: 'sports',
		gender: 'all',
	},
	{
		id: 6,
		name: 'Bicycle',
		type: 'General',
		ageGroup: '+12',
		quantity: 10,
		img: Outdoor,
		category: 'Outdoor',
		gender: 'all',
	},
	{
		id: 7,
		name: 'Lego',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: BoardGames,
		category: 'board games',
		gender: 'all',
	},
	{
		id: 8,
		name: 'Barbie',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Dolls,
		category: 'dolls',
		gender: 'female',
	},
	{
		id: 9,
		name: 'Hot Wheels',
		type: 'General',
		ageGroup: 'All',
		quantity: 30,
		img: Cars,
		category: 'cars',
		gender: 'all',
	},
	{
		id: 10,
		name: 'Basketball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: Sports,
		category: 'sports',
		gender: 'all',
	},
	{
		id: 11,
		name: 'Soccer Ball',
		type: 'General',
		ageGroup: '+9',
		quantity: 10,
		img: Sports,
		category: 'sports',
		gender: 'all',
	},
	{
		id: 12,
		name: 'Bicycle',
		type: 'General',
		ageGroup: '+12',
		quantity: 10,
		img: Outdoor,
		category: 'Outdoor',
		gender: 'all',
	},
];
export const clothes: TClothesItem[] = [
	{
		id: 1,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: Shirts,
		size: 'M',
	},
	{
		id: 2,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: Pants,
		size: 'L',
	},
	{
		id: 3,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: Jackets,
		size: 'S',
	},
	{
		id: 4,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: Shirts,
		size: 'M',
	},
	{
		id: 5,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: Pants,
		size: 'L',
	},
	{
		id: 6,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: Jackets,
		size: 'S',
	},
	{
		id: 7,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: Shirts,
		size: 'M',
	},
	{
		id: 8,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: Pants,
		size: 'L',
	},
	{
		id: 9,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: Jackets,
		size: 'S',
	},
	{
		id: 10,
		name: 'Shirt',
		type: 'General',
		quantity: 100,
		img: Shirts,
		size: 'M',
	},
	{
		id: 11,
		name: 'Pants',
		type: 'General',
		quantity: 50,
		img: Pants,
		size: 'L',
	},
	{
		id: 12,
		name: 'Jacket',
		type: 'General',
		quantity: 30,
		img: Jackets,
		size: 'S',
	},
];
