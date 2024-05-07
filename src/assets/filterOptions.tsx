export const toysFilterOptions = [
	{
		id: "ageGroup",
		label: "Age Group",
		type: "options",
		options: [
			{
				value: "All",
				label: "All",
			},
			{
				value: "+3",
				label: "+3",
			},
			{
				value: "+5",
				label: "+5",
			},
			{ value: "+7", label: "+7" },
			{ value: "+9", label: "+9" },
			{ value: "+12", label: "+12" },
		],
	},
	{
		id: "category",
		label: "Category",
		type: "options",
		options: [
			{
				value: "board games",
				label: "board games",
			},
			{
				value: "dolls",
				label: "dolls",
			},
			{
				value: "cars",
				label: "cars",
			},
			{
				value: "sports",
				label: "sports",
			},
			{
				value: "Outdoor",
				label: "Outdoor",
			},
		],
	},
	{
		id: "gender",
		label: "Gender",
		type: "options",
		options: [
			{
				value: "all",
				label: "all",
			},
			{
				value: "male",
				label: "Male",
			},
			{
				value: "female",
				label: "Female",
			},
		],
	},
];

export const clothesFilterOptions = [
	{
		id: "",
		label: "",
		type: "",
	},
];
export const medicalSuppliesFilterOptions = [{}];
export const schoolSuppliesFilterOptions = [{}];
export const foodsFilterOptions = [{}];
export const bloodFilterOptions = [{}];

export const donationsCategories = [
	{
		name: "Toys",
		key: "toys",
	},
	{
		name: "Clothes",
		key: "clothes",
	},
	{
		name: "Food",
		key: "food",
	},
	{
		name: "Medical Supplies",
		key: "medical",
	},
	{
		name: "School Supplies",
		key: "school",
	},
	{
		name: "Blood",
		key: "blood",
	},
];

export const RegisteredOrganizationsOptions = [
	{
		id: "type",
		label: "Type",
		type: "options",
		options: [
			{
				value: "All",
				label: "All",
			},
			{
				value: "Non-profit",
				label: "Non-profit",
			},
			{
				value: "Profit",
				label: "Profit",
			},
		],
	},
	{
		id: "city",
		label: "City",
		type: "options",
		options: [
			{
				value: "Anytown",
				label: "Anytown",
			},
			{
				value: "Othertown",
				label: "Othertown",
			},
			{
				value: "Another town",
				label: "Another town",
			},
		],
	},
	{
		id: "state",
		label: "State",
		type: "options",
		options: [
			{
				value: "CA",
				label: "CA",
			},
			{
				value: "NY",
				label: "NY",
			},
			{
				value: "TX",
				label: "TX",
			},
		],
	},
];
