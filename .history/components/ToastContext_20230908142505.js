import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}

	return context;
};

export const ToastProvider = ({ children }) => {
	const [showToast, setShowToast] = useState([]);

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
