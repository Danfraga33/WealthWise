import { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => {
	return useContext(ToastContext);
};

export const ToastProvider = ({ children }) => {
	const [showToast, setShowToast] = useState(false);

	function showToastMessage() {
		setShowToast(true);
		setTimeout(() => {
			setShowToast(false);
		}, 3000);
	}

	return (
		<ToastProvider.Provider value={showToastMessage}>
			{children}
		</ToastProvider.Provider>
	);
};
