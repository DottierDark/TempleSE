export const toysFilterOptions = [
	{
		id: 'ageGroup',
		label: 'Age Group',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: '+3',
				label: '+3',
			},
			{
				value: '+5',
				label: '+5',
			},
			{ value: '+7', label: '+7' },
			{ value: '+9', label: '+9' },
			{ value: '+12', label: '+12' },
		],
	},
	{
		id: 'category',
		label: 'Category',
		type: 'options',
		options: [
			{
				value: 'board games',
				label: 'board games',
			},
			{
				value: 'dolls',
				label: 'dolls',
			},
			{
				value: 'cars',
				label: 'cars',
			},
			{
				value: 'sports',
				label: 'sports',
			},
			{
				value: 'Outdoor',
				label: 'Outdoor',
			},
		],
	},
	{
		id: 'gender',
		label: 'Gender',
		type: 'options',
		options: [
			{
				value: 'all',
				label: 'all',
			},
			{
				value: 'male',
				label: 'Male',
			},
			{
				value: 'female',
				label: 'Female',
			},
		],
	},
];

export const clothesFilterOptions = [
	{
		id: 'ageGroup',
		label: 'Age Group',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: '+3',
				label: '+3',
			},
			{
				value: '+5',
				label: '+5',
			},
			{ value: '+7', label: '+7' },
			{ value: '+9', label: '+9' },
			{ value: '+12', label: '+12' },
		],
	},
	{
		id: 'gender',
		label: 'Gender',
		type: 'options',
		options: [
			{
				value: 'all',
				label: 'All',
			},
			{
				value: 'male',
				label: 'Male',
			},
			{
				value: 'female',
				label: 'Female',
			},
		],
	},
	{
		id: 'season',
		label: 'Season',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: 'Summer',
				label: 'Summer',
			},
			{
				value: 'Winter',
				label: 'Winter',
			},
			{
				value: 'Spring',
				label: 'Spring',
			},
			{
				value: 'Fall',
				label: 'Fall',
			},
		],
	},
];
export const medicalSuppliesFilterOptions = [
	{
		id: 'itemType',
		label: 'Item Type',
		type: 'options',
		options: [
			{
				value: 'Medicine' || 'medicine',
				label: 'Medicines',
			},
			{
				value: 'Equipment' || 'equipment',
				label: 'Equipments',
			},
			{
				value: 'Device' || 'device',
				label: 'Devices',
			},
		],
	},
	{
		id: 'use',
		label: 'Medication Use',
		type: 'options',
		options: [
			{
				value: 'Pain',
				label: 'Pain',
			},
			{
				value: 'Cold',
				label: 'Cold',
			},
			{
				value: 'Flu',
				label: 'Flu',
			},
			{
				value: 'Allergy',
				label: 'Allergy',
			},
			{
				value: 'Other',
				label: 'Other',
			},
		],
	},
];
export const medicalCasesFilterOptions = [{}];
export const schoolSuppliesFilterOptions = [
	{
		id: 'itemType',
		label: 'Item Type',
		type: 'options',
		options: [
			{
				value: 'Stationary' || 'stationary',
				label: 'Stationary',
			},
			{
				value: 'Book' || 'book',
				label: 'Book',
			},
		],
	},
];
export const foodsFilterOptions = [{}];
export const bloodFilterOptions = [
	{
		id: 'hospital',
		label: 'Hospital',
		type: 'string',
	},
	{
		id: 'area',
		label: 'Area',
		type: 'string',
	},
	{
		id: 'gov',
		label: 'Governorate',
		type: 'string',
	},
];

export const donationsCategories = [
	{
		name: 'Toys',
		key: 'toys',
	},
	{
		name: 'Clothes',
		key: 'clothes',
	},
	{
		name: 'Food',
		key: 'food',
	},
	{
		name: 'Medical Supplies',
		key: 'medical-supplies',
	},
	{
		name: 'School Supplies',
		key: 'school-supplies',
	},
	{
		name: 'Blood Donation',
		key: 'blood-donation',
	},
	{
		name: 'Teaching Posts',
		key: 'teaching',
	},
	{
		name: 'Medical Cases',
		key: 'medical-Cases',
	},
	{
		name: 'Organizations',
		key: 'organizations',
	},
];
export const OrgOptions = [
	{
		name: ' Fulfilled',
		key: 'fulfilled',
	},
	{},
];

export const RegisteredOrganizationsOptions = [
	{
		id: 'type',
		label: 'Type',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: 'Non-profit',
				label: 'Non-profit',
			},
			{
				value: 'Profit',
				label: 'Profit',
			},
		],
	},
	{
		id: 'city',
		label: 'City',
		type: 'options',
		options: 'string',
	},
	{
		id: 'state',
		label: 'State',
		type: 'options',
		options: 'string',
	},
];

export const TeachingPostsOptions = [
	{
		id: 'subject',
		label: 'Subject',
		type: 'options',
		options: [
			{
				value: 'All',
				label: 'All',
			},
			{
				value: 'Math',
				label: 'Math',
			},
			{
				value: 'Science',
				label: 'Science',
			},
			{
				value: 'English',
				label: 'English',
			},
			{
				value: 'History',
				label: 'History',
			},
			{
				value: 'Art',
				label: 'Art',
			},
			{
				value: 'Music',
				label: 'Music',
			},
			{
				value: 'Physical Education',
				label: 'Physical Education',
			},
		],
	},
	{
		id: 'area',
		label: 'Area',
		type: 'string',
	},
	{
		id: 'gov',
		label: 'Governorate',
		type: 'string',
	},
];
