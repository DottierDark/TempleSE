import {
	TBloodDonation,
	TClothesItem,
	TFoodItem,
	TMedicalCase,
	TMedicalSupply,
	TStationaryItem,
	TTeachingPost,
	TToyItem,
	User,
	Organization,
	Donor,
	TSchoolSuppliesItem,
	TOrgPost,
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
import mask from '../assets/Images/Donor/Lists/MedicalSupplies/mask.jpeg';
import glove from '../assets/Images/Donor/Lists/MedicalSupplies/glove.jpeg';
import Sanitizer from '../assets/Images/Donor/Lists/MedicalSupplies/sanitizer.jpeg';
import comtrex from '../assets/Images/Donor/Lists/MedicalSupplies/comtrex.jpeg';
import detol from '../assets/Images/Donor/Lists/MedicalSupplies/Detol.jpeg';
import panadol from '../assets/Images/Donor/Lists/MedicalSupplies/panadol.jpeg';
import strepsils from '../assets/Images/Donor/Lists/MedicalSupplies/strepsils.jpeg';
import thermometer from '../assets/Images/Donor/Lists/MedicalSupplies/thermometer.jpeg';
import stethoscope from '../assets/Images/Donor/Lists/MedicalSupplies/stethoscope.jpeg';
import xray from '../assets/Images/Donor/Lists/MedicalSupplies/xray.jpeg';

{
	/* School Supplies list Images*/
}
import Pencils from '../assets/Images/Donor/Lists/School/pencils.jpeg';
import Notebooks from '../assets/Images/Donor/Lists/School/Notebooks.jpeg';
import Backpacks from '../assets/Images/Donor/Lists/School/backpacks.jpeg';
import books from '../assets/Images/Donor/Lists/School/books.jpeg';

{
	/* Teaching Posts list Images*/
}
import teachingPost from '../assets/Images/Donor/Lists/TeachingPosts/teachingpost.jpeg';
import english from '../assets/Images/Donor/Lists/TeachingPosts/english.jpeg';
import math from '../assets/Images/Donor/Lists/TeachingPosts/math.jpeg';
import music from '../assets/Images/Donor/Lists/TeachingPosts/music.jpeg';
import pe from '../assets/Images/Donor/Lists/TeachingPosts/pe.jpeg';
import science from '../assets/Images/Donor/Lists/TeachingPosts/science.jpeg';
import history from '../assets/Images/Donor/Lists/TeachingPosts/history.jpeg';
import art from '../assets/Images/Donor/Lists/TeachingPosts/art.jpeg';
{
	/* Blood list Images*/
}
import AB from '../assets/Images/Donor/Lists/MedicalSupplies/AB.jpeg';
import B from '../assets/Images/Donor/Lists/MedicalSupplies/B.jpeg';

import org from '../assets/Images/Admin/organization.jpeg';

import medical from '../assets/Images/Donor/medicalpost/medicalcases.jpeg';



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
		donorType: 'regular',
	},
	{
		type: 'donor',
		username: 'teacher',
		password: 'teacher123',
		donorType: 'teacher',
	},
	{
		type: 'donor',
		username: 'doctor',
		password: 'doctor123',
		donorType: 'doctor',
	},
	{
		type: 'organisation',
		username: 'org',
		password: 'org123',
	},
];

export const organizations: Organization[] = [
	{
		id: 1,
		name: 'Hope Shelter',
		type: 'Non-profit',
		street: '123 Main St',
		area: 'Anytown',
		gov: 'CA',
		contactPhone: '123-456-7890',
		contactEmail: 'hope@shelter.com',
		status: 'approved',

		img: org,
	},

	{
		id: 2,
		name: 'Salvation Army',
		type: 'Non-profit',
		street: '789 Oak St',
		area: 'Othertown',
		gov: 'NY',
		contactPhone: '123-456-7190',
		contactEmail: 'sal@gmail.com',
		status: 'approved',

		img: org,
	},
	{
		id: 3,
		name: 'Goodwill',
		type: 'Non-profit',
		street: '456 Elm St',
		area: 'Another Town',
		gov: 'TX',
		contactPhone: '123-456-7800',
		contactEmail: 'GOOd@gmail.com',
		status: 'pending',

		img: org,
	},
	{
		id: 4,
		name: 'Red Cross',
		type: 'Non-profit',
		street: '101 Pine St',
		area: 'Anytown',
		gov: 'CA',
		contactPhone: '123-456-7820',
		contactEmail: 'red@gmail.com',
		status: 'pending',

		img: org,
	},
	{
		id: 5,
		name: 'Dope Shelter',
		type: 'Non-profit',
		street: '123 unrad St',
		area: 'Anytown',
		gov: 'TX',
		contactPhone: '123-416-7890',
		contactEmail: 'dope@shelter.com',
		status: 'approved',

		img: org,
	},
	{
		id: 6,
		name: 'X shelter',
		type: 'Profit',
		street: '789 rad St',
		area: 'Anytown',
		gov: 'NY',
		contactPhone: '132-456-7890',
		contactEmail: 'x@gmail.com',
		status: 'approved',

		img: org,
	},
	{
		id: 7,
		name: 'Future Shelter',
		type: 'Profit',
		street: '789 Rad St',
		area: 'Othertown',
		gov: 'CA',
		contactPhone: '123-126-7890',
		contactEmail: 'fut@gmail.com',
		status: 'approved',

		img: org,
	},
	{
		id: 8,
		name: 'World Shelter',
		type: 'Non-profit',
		street: '144 Sun St',
		area: 'Another Town',
		gov: 'TX',
		contactPhone: '123-456-7890',
		contactEmail: 'wa@gmail.com',
		status: 'approved',

		img: org,
	},
];

export const donor: Donor[] = [
	{
		firstname: 'Amr',
		secondname: 'Hossam',
		area: 'Anytown',
		gov: 'CA',
		email: 'amr@gmail.com',
		contactPhone: '123-456-7810',
		status: 'pending',
	},
	{
		firstname: 'Nada',
		secondname: 'Saleh',
		area: 'Another Town',
		gov: 'TX',
		email: 'nada@gmail.com',
		contactPhone: '123-456-7830',
		status: 'pending',
	},
	{
		firstname: 'Salma',
		secondname: 'Ahmed',
		area: 'Othertown',
		gov: 'NY',
		email: 'salama@gmail.com',
		contactPhone: '124-456-7850',
		status: 'pending',
	},
	{
		firstname: 'Dalia',
		secondname: 'Habib',
		area: 'Anytown',
		gov: 'CA',
		email: 'dalia@gmail.com',
		contactPhone: '123-456-7170',
		status: 'pending',
	},
	{
		firstname: 'Tia',
		secondname: 'Abdelrahman',
		area: 'Another Town',
		gov: 'TX',
		email: 'tia@gmail.com',
		contactPhone: '123-456-7891',
		status: 'pending',
	},
	{
		firstname: 'Hala',
		secondname: 'Ashraf',
		area: 'Anytown',
		gov: 'CA',
		email: 'hala@gmail.com',
		contactPhone: '123-456-7892',
		status: 'pending',
	},
	{
		firstname: 'Noor',
		secondname: 'Ismail',
		area: 'Othertown',
		gov: 'NY',
		email: 'noor@gmail.com',
		contactPhone: '123-456-7893',
		status: 'pending',
	},
	{
		firstname: 'Jannah',
		secondname: 'Omar',
		area: 'Anytown',
		gov: 'CA',
		email: 'jannah@gmail.com',
		contactPhone: '123-456-7894',
		status: 'pending',
	},
	{
		firstname: 'Ahmed',
		secondname: 'Mostafa',
		area: 'Anytown',
		gov: 'CA',
		email: 'ahmed@gmail.com',
		contactPhone: '123-456-7895',
		status: 'pending',
	},
	{
		firstname: 'Ali',
		secondname: 'Basha',
		area: 'Anytown',
		gov: 'CA',
		email: 'ali@gmail.com',
		contactPhone: '123-456-7896',
		status: 'pending',
	},
	{
		firstname: 'Hossam',
		secondname: 'Hassan',
		area: 'Anytown',
		gov: 'CA',
		email: 'hosssam@gmail.com',
		contactPhone: '123-456-7896',
		status: 'approved',
	},
	{
		firstname: 'Ibrahim',
		secondname: 'Ali',
		area: 'Anytown',
		gov: 'CA',
		email: 'ibrahim@gmail.com',
		contactPhone: '123-456-7896',
		status: 'approved',
	},
	{
		firstname: 'Ahmed',
		secondname: 'Ibrahim',
		area: 'Anytown',
		gov: 'CA',
		email: 'ahmed@gmail.com',
		contactPhone: '123-456-7896',
		status: 'approved',
	},
];
export const foods: TFoodItem[] = [
	{
		id: 1,
		name: 'Canned Food',
		type: 'canned',
		quantity: 50,
		img: Canned,
	},
	{
		id: 2,
		name: 'Apple',
		type: 'fruits and vegetables',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 3,
		name: 'Baked Food',
		type: 'baked',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 4,
		name: 'Canned Food',
		type: 'canned',
		quantity: 50,
		img: Canned,
	},
	{
		id: 5,
		name: 'Fresh Produce',
		type: 'fresh',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 6,
		name: 'Baked Food',
		type: 'baked',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 7,
		name: 'Canned Food',
		type: 'canned',
		quantity: 50,
		img: Canned,
	},
	{
		id: 8,
		name: 'Fresh Produce',
		type: 'fresh',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 9,
		name: 'Banana',
		type: 'fruits and vegetables',
		quantity: 20,
		img: Frozen,
	},
	{
		id: 10,
		name: 'Canned Food',
		type: 'canned',
		quantity: 50,
		img: Canned,
	},
	{
		id: 11,
		name: 'Fresh Produce',
		type: 'fresh',
		quantity: 30,
		img: Fresh,
	},
	{
		id: 12,
		name: 'Baked Food',
		type: 'baked',
		quantity: 20,
		img: Frozen,
	},
];

export const medicalSupplies: TMedicalSupply[] = [
	{
		id: 1,
		name: 'Masks',
		type: 'equipment',
		quantity: 100,
		img: mask,
		use: 'General',
	},
	{
		id: 2,
		name: 'Gloves',
		type: 'equipment',
		quantity: 50,
		img: glove,
		use: 'General',
	},
	{
		id: 3,
		name: 'Sanitizer',
		type: 'equipment',
		quantity: 30,
		img: Sanitizer,
		use: 'General',
	},
	{
		id: 4,
		name: 'Masks',
		type: 'equipment',
		quantity: 100,
		img: mask,
		use: 'General',
	},
	{
		id: 5,
		name: 'X-Ray Machine',
		type: 'device',
		quantity: 10,
		img: xray,
		use: 'General',
	},
	{
		id: 6,
		name: 'Stethoscope',
		type: 'device',
		quantity: 20,
		img: stethoscope,
		use: 'General',
	},
	{
		id: 7,
		name: 'Thermometer',
		type: 'device',
		quantity: 30,
		img: thermometer,
		use: 'General',
	},
	{
		id: 8,
		name: 'Panadol',
		type: 'medicine',
		quantity: 40,
		img: panadol,
		use: 'Pain',
	},

	{
		id: 10,
		name: 'Strepsils',
		type: 'medicine',
		quantity: 60,
		img: strepsils,
		use: 'Cold',
	},
];
export const schoolSupplies: TSchoolSuppliesItem[] = [
	{
		id: 1,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
		itemType: 'stationary',
	},
	{
		id: 2,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
		itemType: 'stationary',
	},
	{
		id: 3,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
		itemType: 'stationary',
	},
	{
		id: 4,
		name: 'Pencils',
		type: 'General',
		quantity: 100,
		img: Pencils,
		itemType: 'stationary',
	},
	{
		id: 5,
		name: 'Notebooks',
		type: 'General',
		quantity: 50,
		img: Notebooks,
		itemType: 'stationary',
	},
	{
		id: 6,
		name: 'Backpacks',
		type: 'General',
		quantity: 30,
		img: Backpacks,
		itemType: 'stationary',
	},
	{
		id: 7,
		name: 'Splash',
		quantity: 100,
		img: books,
		itemType: 'book',
		author: 'Lisa Green',
		bookName: 'Splash',
		language: 'English',
		edition: '1st',
		summary: 'A story about a little fish exploring the ocean.',
	},
	{
		id: 8,
		name: 'Moon',
		img: books,
		quantity: 10,
		bookName: 'Moon',
		author: 'Sam lee',
		language: 'English',
		edition: '1st',
		summary: 'A tale of adventure under the moonlight',
		itemType: 'book',
	},
	{
		id: 9,
		name: 'Dune',
		img: books,
		quantity: 20,
		bookName: 'Dune',
		author: 'Frank Herbert',
		language: 'English',
		edition: '2nd',
		summary:
			'Set in a distant future where noble houses vie for control of the desert planet Arrakis',
		itemType: 'book',
	},

	{
		id: 13,
		name: 'Glow',
		img: books,
		quantity: 60,
		bookName: 'Glow',
		author: 'Ava Brown',
		language: 'English',
		edition: '6th',
		summary: 'Discover the magic of fireflies on a summer night.',
		itemType: 'book',
	},
];

export const bloodCases: TBloodDonation[] = [
	{
		id: 1,
		name: 'Ahmed Ali',
		volume: 3,
		img: B,
		bloodType: 'B',
		hospital: 'Hope Hospital',
		area: 'Springfield',
		gov: 'USA',
		address: '315 Maple Street, Springfield, IL 62701, USA',
	},
	{
		id: 2,
		name: 'Ali Ibrahim',
		bloodType: 'AB',
		volume: 1,
		img: AB,
		hospital: 'Dope Hospital',
		area: 'London',
		gov: 'UK',
		address: '42B High Street, London E1 7AW, United Kingdom',
	},
	{
		id: 3,
		name: 'Mostafa Ahmed',
		bloodType: 'B',
		volume: 2,
		img: B,
		hospital: 'Future Hospital',
		area: 'Montreal',
		gov: 'Canada',
		address:
			'789 Avenue des Canadiens-de-Montréal, Montreal, QC H3B 0G1, Canada',
	},
	{
		id: 4,
		name: 'Tia Mohamed',
		bloodType: 'B',
		volume: 4,
		img: B,
		hospital: 'Evergreen Center',
		area: 'Pineville',
		gov: 'USA',
		address: '1345 Cedar StreetPineville, OR 97000United States',
	},
	{
		id: 5,
		name: 'Salma Ali',
		bloodType: 'AB',
		volume: 5,
		img: AB,
		hospital: 'Meadow Hospital',
		area: 'Willow Springs',
		gov: 'Australia',
		address: '789 Elm Avenue Willow Springs, NSW 2000 Australia',
	},
	{
		id: 6,
		name: 'Nada Mohamed',
		bloodType: 'AB',
		volume: 6,
		img: AB,
		hospital: 'Pineview Hospital',
		area: 'Springfield',
		gov: 'USA',
		address: '567 Oak Street, Springfield, MA 01103, United States',
	},
	{
		id: 7,
		name: 'Hala Ali',
		bloodType: 'B',
		volume: 7,
		img: B,
		hospital: 'Lakeside Center',
		area: 'Rivertown',
		gov: 'USA',
		address: '890 Pine Avenue, Rivertown, NY 10001, United States',
	},
	{
		id: 8,
		name: 'Dalia Mohamed',
		bloodType: 'AB',
		volume: 8,
		img: AB,
		hospital: 'Royal Hospital',
		area: 'Manchester',
		gov: 'UK',
		address: '123 Kings Road, Manchester, M14 5LW, United Kingdom',
	},
	{
		id: 9,
		name: 'Amr Ali',
		bloodType: 'B',
		volume: 9,
		img: B,
		hospital: 'Sunrise Hospital',
		area: 'Sunrise City',
		gov: 'USA',
		address: '789 Main Street, Sunrise City, FL 33000, United States',
	},
];

export const teachingPosts: TTeachingPost[] = [
	{
		id: 1,
		name: 'History Teacher',
		quantity: 1,
		img: history,
		subject: 'History',
		students: 30,
		area: 'Any town',
		gov: 'Any Gov',
	},
	{
		id: 2,
		name: 'Science Teacher',
		quantity: 1,
		img: science,
		subject: 'Science',
		students: 40,
		area: 'Other Town',
		gov: 'Other Gov',
	},
	{
		id: 3,
		name: 'English Teacher',
		quantity: 1,
		img: english,
		subject: 'English',
		students: 50,
		area: 'Another Town',
		gov: 'Another Gov',
	},
	{
		id: 4,
		name: 'Art Teacher',
		quantity: 1,
		img: art,
		subject: 'Art',
		students: 60,
		area: 'Any town',
		gov: 'Any Gov',
	},
	{
		id: 5,
		name: 'Music Teacher',
		quantity: 1,
		img: music,
		subject: 'Music',
		students: 70,
		area: 'Another Town',
		gov: 'Another Gov',
	},
	{
		id: 6,
		name: 'PE Teacher',
		quantity: 1,
		img: pe,
		subject: 'Physical Education',
		students: 80,
		area: 'Other Town',
		gov: 'Other Gov',
	},
	{
		id: 7,
		name: 'Math Teacher',
		quantity: 1,
		img: math,
		subject: 'Math',
		students: 30,
		area: 'Any town',
		gov: 'Any Gov',
	},
	{
		id: 8,
		name: 'Science Teacher',
		quantity: 1,
		img: science,
		subject: 'Science',
		students: 40,
		area: 'Other Town',
		gov: 'Other Gov',
	},
	{
		id: 9,
		name: 'English Teacher',
		quantity: 1,
		img: english,
		subject: 'English',
		students: 50,
		area: 'Another Town',
		gov: 'Another Gov',
	},
	{
		id: 10,
		name: 'Art Teacher',
		quantity: 1,
		img: art,
		subject: 'Art',
		students: 60,
		area: 'Any town',
		gov: 'Any Gov',
	},
	{
		id: 11,
		name: 'Music Teacher',
		quantity: 1,
		img: music,
		subject: 'Music',
		students: 70,
		area: 'Another Town',
		gov: 'Another Gov',
	},
	{
		id: 12,
		name: 'PE Teacher',
		quantity: 1,
		img: pe,
		subject: 'Physical Education',
		students: 80,
		area: 'Other Town',
		gov: 'Other Gov',
	},
	{
		id: 13,
		name: 'Math Teacher',
		quantity: 1,
		img: math,
		subject: 'Math',
		students: 30,
		area: 'Any town',
		gov: 'Any Gov',
	},
	{
		id: 14,
		name: 'Science Teacher',
		quantity: 1,
		img: science,
		subject: 'Science',
		students: 40,
		area: 'Other Town',
		gov: 'Other Gov',
	},
	{
		id: 15,
		name: 'English Teacher',
		quantity: 1,
		img: english,
		subject: 'English',
		students: 50,
		area: 'Another Town',
		gov: 'Another Gov',
	},
	{
		id: 16,
		name: 'Art Teacher',
		quantity: 1,
		img: art,
		subject: 'Art',
		students: 60,
		area: 'Any town',
		gov: 'Any Gov',
	},
];

export const medicalCases: TMedicalCase[] = [
	{
		id: 1,
		name: 'John Doe',
		quantity: 100,
		img: medical,
		patientName: 'John Doe',
		age: 30,
		gender: 'male',
		weight: 150,
		location: 'Mercy Hospital',
		street: '500 Mercy Lane Willowbrook, CA 90210',
		area: 'Willowbrook',
		gov: 'USA',
		specialty: 'General',
		description: 'Chief Complaint: Severe abdominal pain, nausea, vomiting',
		orgName: 'Hope Shelter',
	},
	{
		id: 2,
		name: 'Jane Doe',
		quantity: 200,
		img: medical,
		patientName: 'Jane Doe',
		age: 50,
		gender: 'male',
		weight: 90,
		location: 'Lakeside Medical Center',
		street: '39200 Hooker Hwy Belle Glade, FL 33430',
		area: 'Belle Glade',
		gov: 'USA',
		specialty: 'throat',
		description: 'Chief Complaint: Chest pain, shortness of breath',
		orgName: 'Future Shelter',
	},
	{
		id: 3,
		name: 'Khaled Doe',
		quantity: 100,
		img: medical,
		patientName: 'Khaled Doe',
		age: 50,
		gender: 'male',
		weight: 300,
		location: 'Royal Infirmary Hospital',
		street: '16 Alexandra Parade Glasgow G31 2ER, UK',
		area: 'Glasgow',
		gov: 'UK',
		specialty: 'lungs',
		description:
			'Chief Complaint: Persistent cough, fever, difficulty breathing',
		orgName: 'X Shelter',
	},
	{
		id: 4,
		name: 'Hassan Doe',
		quantity: 100,
		img: medical,
		patientName: 'Hassan Doe',
		age: 50,
		gender: 'male',
		weight: 300,
		location: 'Central General Hospital',
		street: 'Central General Hospital, 123 Main St, Anytown, CA 12345',
		area: 'Anytown',
		gov: 'USA',
		specialty: 'General',
		description: 'Chief Complaint: Severe pain and swelling in the right leg',
		orgName: 'Dope Shelter',
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
		name: 'Jackets',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: Jackets,
		season: 'Winter',
		material: 'Cotton',
		gender: 'all',
	},
	{
		id: 2,
		name: 'Pants',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Pants,
		season: 'Winter',
		material: 'Cotton',
		gender: 'all',
	},
	{
		id: 3,
		name: 'T-Shirts',
		type: 'General',
		ageGroup: '+5',
		quantity: 30,
		img: Shirts,
		season: 'Summer',
		material: 'Cotton',
		gender: 'male',
	},
	{
		id: 4,
		name: 'Jackets',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: Jackets,
		season: 'Winter',
		material: 'Cotton',
		gender: 'all',
	},
	{
		id: 5,
		name: 'Pants',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Pants,
		season: 'Winter',
		material: 'Cotton',
		gender: 'female',
	},
	{
		id: 6,
		name: 'T-Shirts',
		type: 'General',
		ageGroup: '+5',
		quantity: 30,
		img: Shirts,
		season: 'Summer',
		material: 'Cotton',
		gender: 'all',
	},
	{
		id: 7,
		name: 'Jackets',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: Jackets,
		season: 'Winter',
		material: 'Cotton',
		gender: 'male',
	},
	{
		id: 8,
		name: 'Pants',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Pants,
		season: 'Winter',
		material: 'Cotton',
		gender: 'male',
	},
	{
		id: 9,
		name: 'T-Shirts',
		type: 'General',
		ageGroup: '+5',
		quantity: 30,
		img: Shirts,
		season: 'Summer',
		material: 'Cotton',
		gender: 'female',
	},
	{
		id: 10,
		name: 'Jackets',
		type: 'General',
		ageGroup: 'All',
		quantity: 100,
		img: Jackets,
		season: 'Winter',
		material: 'Cotton',
		gender: 'all',
	},
	{
		id: 11,
		name: 'Pants',
		type: 'General',
		ageGroup: '+3',
		quantity: 50,
		img: Pants,
		season: 'Winter',
		material: 'Cotton',
		gender: 'female',
	},
	{
		id: 12,
		name: 'T-Shirts',
		type: 'General',
		ageGroup: '+5',
		quantity: 30,
		img: Shirts,
		season: 'Summer',
		material: 'Cotton',
		gender: 'all',
	},
];

export const orgPosts: TOrgPost[] = [
	{
		postCategory: 'clothes',
		condition: true,
		...clothes[0],
		id: 1,
	},
	{
		postCategory: 'clothes',
		condition: false,

		...clothes[1],
		id: 2,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[2],
		id: 3,
	},
	{
		postCategory: 'clothes',
		condition: true,
		...clothes[3],
		id: 4,
	},
	{
		postCategory: 'clothes',
		condition: true,
		...clothes[4],
		id: 5,
	},
	{
		postCategory: 'clothes',
		condition: true,
		...clothes[5],
		id: 6,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[6],
		id: 7,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[7],
		id: 8,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[8],
		id: 9,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[9],
		id: 10,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[10],
		id: 11,
	},
	{
		postCategory: 'clothes',
		condition: false,
		...clothes[11],
		id: 12,
	},
	{
		postCategory: 'toys',
		condition: true,
		...toys[0],
		id: 13,
	},
	{
		postCategory: 'toys',
		condition: true,
		...toys[1],
		id: 14,
	},
	{
		postCategory: 'toys',
		condition: true,
		...toys[2],
		id: 15,
	},
	{
		postCategory: 'toys',
		condition: false,
		...toys[3],
		id: 16,
	},
	{
		postCategory: 'toys',
		condition: true,
		...toys[4],
		id: 17,
	},
	{
		postCategory: 'toys',
		condition: false,
		...toys[5],
		id: 18,
	},
	{
		postCategory: 'toys',
		condition: true,
		...toys[6],
		id: 19,
	},
];
