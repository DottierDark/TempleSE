import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { z } from 'zod';
import { toys } from '../../../assets/dummyData';
import { DetailsContextProvider } from '../../../Components/details/useDetailsContext';
import { TToyItem } from '../../../types';
import { Form } from '../../../Components/shadcn/ui/form';
import TextField from '../../../Components/details/fields/TextField';
import NumberField from '../../../Components/details/fields/NumberField';
import { useEffect } from 'react';
import ImageField from '../../../Components/details/fields/ImageField';
import Details from '../../../Components/details/Details';

export default function FulfilledPost() {
	const { id } = useParams<{ id: string }>();
	const toy = ful.find((item) => item.id.toString() === id);

	const form = useForm<TToyItem>({
		defaultValues: {
			id: undefined,
			name: undefined,
			type: undefined,
			ageGroup: undefined,
			quantity: undefined,
			img: undefined,
			gender: undefined,
			category: undefined,
		},
	});

	useEffect(() => {
		if (toy) {
			form.reset(toy);
		}
	}, [toy]);

	return (
		<Form {...form}>
			<DetailsContextProvider title="Fulfilled post" id={id} canEdit={false}>
				<Details acceptRequest>
					<div className="grid grid-cols-2 p-6 gap-x-12">
						<TextField
							name="name"
							label="Name"
							description="Name of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<TextField
							name="type"
							label="Type"
							description="Type of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<TextField
							name="ageGroup"
							label="Age Group"
							description="Age group for the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<NumberField
							name="quantity"
							label="Quantity"
							description="Quantity of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<TextField
							name="gender"
							label="gender"
							description="Gender of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<TextField
							name="category"
							label="Category"
							description="Category of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
						<ImageField
							name="img"
							label="Image"
							description="Image of the toy"
							detailsClassName=""
							inputClassName=""
							placeholder=""
						/>
					</div>
				</Details>
			</DetailsContextProvider>
		</Form>
	);
}
