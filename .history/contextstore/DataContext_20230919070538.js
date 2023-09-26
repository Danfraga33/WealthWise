import { createContext } from 'react';

const CompoundContext = createContext({});

function CompoundContextProvider() {
	return <CompoundContext.Provider>{props.children}</CompoundContext.Provider>;
}

export default CompoundContext;
