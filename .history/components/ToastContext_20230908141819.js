import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();
if (!context) {
	throw new Error('useToast must be used within a ToastProvider');
}

export const useToast = () => {
	return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
	const [showToast, setShowToast] = useState(false);

	const showPortfolioToast = () => {
		setShowToast(true);
	};

	const hidePortfolioToast = () => {
		setShowToast(false);
	};

	return (
		<ToastProvider.Provider
			value={{ showToast, showPortfolioToast, hidePortfolioToast }}
		>
			{children}
		</ToastProvider.Provider>
	);
};
