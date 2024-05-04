import { useDetailsContext } from './useDetailsContext';
import { Button } from '../shadcn/ui/button';
import { useFormContext } from 'react-hook-form';
export default function Details({ children }: React.PropsWithChildren) {
	const { isAddMode, isEditMode, setIsAddMode, setIsEditMode, title, id } =
		useDetailsContext();

	const { handleSubmit } = useFormContext();

	const handleSave = () => {
		handleSubmit((data) => {
			console.log(data);
			setIsEditMode(false);
		});
	};

	const handleEdit = () => {
		setIsEditMode(true);
	};

	const handleAdd = () => {
		handleSubmit(() => {
			setIsAddMode(false);
		});
	};

	return (
		<>
			<div className="h-12 w-full flex justify-between px-12 items-center">
				<h1 className="text-3xl font-bold text-black">
					{isAddMode
						? `Add ${title}`
						: isEditMode
							? `Editing ${title} - ${id}`
							: ` ${title} - ${id} Details`}
				</h1>
				<div className="flex items-center gap-4">
					<Button
						className="text-white w-32 h-10 text-lg"
						onClick={() => {
							if (isAddMode) {
								handleAdd();
							} else if (isEditMode) {
								handleSave();
							} else {
								handleEdit();
							}
						}}
					>
						{isAddMode ? 'Add' : isEditMode ? 'Save' : 'Edit'}
					</Button>
				</div>
			</div>
			{children}
		</>
	);
}
