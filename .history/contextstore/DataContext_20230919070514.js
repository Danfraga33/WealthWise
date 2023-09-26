import { createContext } from 'react';

const CompoundContext = createContext({});

function CompoundContextProvider() {
	return <CompoundContext.Provider>{children}</CompoundContext.Provider>;
}
