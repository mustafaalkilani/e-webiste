import { createContext, useState } from "react";

export const PhoneNavigationContext = createContext({
    phoneNavigationBtn: 'closed',
    setPhoneNavigationBtn: () => null,

})

export const PhoneNavigationProvider = ({children}) => {
    const [phoneNavigationBtn, setPhoneNavigationBtn] = useState('closed')

    const value = {phoneNavigationBtn, setPhoneNavigationBtn}

    return <PhoneNavigationContext.Provider value={value}>{children}</PhoneNavigationContext.Provider>
}