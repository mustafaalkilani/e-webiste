import { createContext, useRef } from "react";

export const NavigationScrollToContext = createContext({
    propertiesRef: null,
    homeRef: null,
    aboutRef: null,
    contactRef: null,
})

export const NavigationScrollToProvider = ({children}) => {
    const propertiesRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const value = {propertiesRef, homeRef, aboutRef, contactRef};
    return <NavigationScrollToContext.Provider value={value}>{children}</NavigationScrollToContext.Provider>
}