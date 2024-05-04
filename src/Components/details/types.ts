export type TDetailsContext = {
	isAddMode: boolean;
	isEditMode: boolean;
	addEditMode: boolean;
	setIsAddMode: (value: boolean) => void;
	setIsEditMode: (value: boolean) => void;
	title: string;
	id?: string;
};
