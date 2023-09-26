import { createContext } from 'react';

const CompoundContext = createContext({});

export function CompoundContextProvider(props) {
	return <CompoundContext.Provider>{props.children}</CompoundContext.Provider>;
}

export default CompoundContext;
