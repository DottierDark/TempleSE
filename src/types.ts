export type User = {
	userName: string;
	name: string;
};

export type TLoginForm = {
	userName: string;
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
	type: "Organization" | "Doctor" | "Teacher";
} & (DoctorRegisterForm | OrganizationRegisterForm | TeacherRegisterForm | {});

export type DoctorRegisterForm = {
	type: "Doctor";
	medicalLicense: string;
	specialty: string;
	cases: number;
};
export type TeacherRegisterForm = {
	type: "Teacher";
	education: string;
	subject: string;
	cases: number;
};

export type OrganizationRegisterForm = {
	type: "Organization";
	Name: string;
	Type: string;
};

export type TCategories =
	| "Clothes"
	| "Toys"
	| "Food"
	| "Medical Supplies"
	| "School Supplies"
	| "Blood Donation";

export type TDonationForm = {
	amount: number;
	cause: string;
};

export type TDonationItem =
	| TStationaryItem
	| TbookItem
	| TtoyItem
	| TfoodItem
	| TmedicineSupplies
	| TbloodDonation
	| TteachingPost
	| TmedicalCase;

export type TStationaryItem = {
	itemId: number;
	quantity: number;
	type: string;
};

export type TbookItem = {
	itemId: number;
	quantity: number;
	bookName: string;
	author: string;
	language: string;
	edition: string;
	summary: string;
};

export type TtoyItem = {
	itemId: number;
	quantity: number;
	type: string;
	ageGroup: string;
	gender: string;
	category: string;
};

export type TfoodItem = {
	itemId: number;
	name: string;
	quantity: number;
	type: string;
};

export type TmedicineSupplies = {
	itemId: number;
	type: string;
	quantity: number;
	use: string;
};

export type TbloodDonation = {
	name: string;
	bloodType: string;
	hospital: string;
	area: string;
	gov: string;
	address: string;
};

export type TteachingPost = {
	students: number;
	subject: string;
	address: string;
};

export type TmedicalCase = {
	patientName: string;
	age: number;
	gender: string;
	weight: number;
	location: string;
	address: string;
	specialty: string;
	description: string;
	orgName: string;
};
