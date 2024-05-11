import { useDetailsContext } from './useDetailsContext';
import { Button } from '../shadcn/ui/button';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export default function Details({
	replacementTitle,
	children,
}: React.PropsWithChildren<{
	replacementTitle?: string;
}>) {
	const {
		isAddMode,
		isEditMode,
		setIsAddMode,
		setIsEditMode,
		title,
		id,
		canEdit,
	} = useDetailsContext();

	const { handleSubmit } = useFormContext();
	const navigate = useNavigate();

	const onSubmit = (_: any) => {
		if (isAddMode) {
			setIsAddMode(false);
			navigate(`..`);
		} else if (isEditMode) {
			setIsEditMode(false);
		} else {
			setIsEditMode(true);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="h-12 w-full flex justify-between px-12 items-center">
				<h1 className="text-3xl font-bold text-black">
					{isAddMode && !replacementTitle
						? `Add ${title}`
						: isEditMode
							? `Editing ` + replacementTitle ?? `${title} - ${id}`
							: replacementTitle ?? `${title} - ${id}` + ` Details`}
				</h1>
				{canEdit && (
					<div className="flex items-center gap-4">
						<Button className="text-white w-32 h-10 text-lg" type="submit">
							{isAddMode && !replacementTitle
								? 'Add'
								: isEditMode
									? 'Save'
									: 'Edit'}
						</Button>
					</div>
				)}
			</div>
			{children}
		</form>
	);
}
