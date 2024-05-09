export type User = {
	username: string;
	password: string;
	type: 'organisation' | 'donor' | 'admin';
};
export type Organization = {
	id: number;
	name: string;
	type: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	contactEmail: string;
	status: 'approved' | 'pending' | 'rejected';
};

export type Donor = {
	firstname: string;
	secondname: string;
	address: string;
	email: string;
};

export type TLoginForm = {
	username: string;
	password: string;
};

export type TRegisterForm = {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	password: string;
	confirmPassword: string;
	phoneNumber: number;
	address: string;
	area: string;
	gov: string;
	type: 'organisation' | 'doctor' | 'teacher';
} & (DoctorRegisterForm | OrganizationRegisterForm | TeacherRegisterForm | {});

export type DoctorRegisterForm = {
	type: 'doctor';
	medicalLicense: string;
	specialty: string;
	cases: number;
};
export type TeacherRegisterForm = {
	type: 'teacher';
	education: string;
	subject: string;
	cases: number;
};

export type OrganizationRegisterForm = {
	type: 'organization';
	Name: string;
	Type: string;
};

export type TCategories =
	| 'Clothes'
	| 'Toys'
	| 'Food'
	| 'Medical Supplies'
	| 'School Supplies'
	| 'Blood Donation'
	| 'Teaching Post'
	| 'Medical Case'
	| string;

export type TDonationForm = {
	amount: number;
	cause: string;
};

export type TDonationItem = {
	id: number;
	name: string;
	img: string;
	quantity: number;
};
export type TStationaryItem = {
	type: string;
} & TDonationItem;
export type TClothesItem = {
	size: string;
	type: string;
} & TDonationItem;

export type TBookItem = {
	bookName: string;
	author: string;
	language: string;
	edition: string;
	summary: string;
} & TDonationItem;

export type TToyItem = {
	type: string;
	ageGroup: string;
	gender: 'male' | 'female' | 'all';
	category:
		| 'board games'
		| 'stuffed toys'
		| 'dolls'
		| 'sports'
		| 'cars'
		| 'Outdoor';
} & TDonationItem;

export type TFoodItem = {
	type: string;
} & TDonationItem;

export type TMedicineSupplies = {
	type: string;
	use: string;
} & TDonationItem;

export type TBloodDonation = {
	bloodType: string;
	hospital: string;
	area: string;
	gov: string;
	address: string;
} & TDonationItem;

export type TTeachingPost = {
	students: number;
	subject: string;
	address: string;
} & TDonationItem;

export type TMedicalCase = {
	patientName: string;
	age: number;
	gender: string;
	weight: number;
	location: string;
	address: string;
	specialty: string;
	description: string;
	orgName: string;
} & TDonationItem;

export type TNavigationMenuTab = {
	name: string;
	href?: string;
	key: string;
	links?: {
		name: string;
		key: string;
		href: string;
	}[];
};
