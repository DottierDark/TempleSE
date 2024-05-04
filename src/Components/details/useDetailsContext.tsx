import React, { createContext, useContext } from 'react';
import { TDetailsContext } from './types';

export const DetailsContext = createContext<TDetailsContext>({
	addEditMode: false,
});

export const useMagicLinkFormContext = () => useContext(DetailsContext);

export const DetailsContextProvider = ({
	children,
	addEditMode,
}: React.PropsWithChildren<{
	addEditMode: boolean;
}>) => {
	const value = { addEditMode };

	return (
		<DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
	);
};
