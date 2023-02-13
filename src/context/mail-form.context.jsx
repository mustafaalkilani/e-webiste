import { createContext, useState } from "react";

export const MailFormContext = createContext({
    inputFiledsValues: '',
    setInputFiledsValues: () => null,
})

export const MailFormProvider= ({children}) => {
    const [inputFiledsValues, setInputFiledsValues] = useState('');
    const value = {inputFiledsValues, setInputFiledsValues};

    return <MailFormContext.Provider value={value}>{children}</MailFormContext.Provider>
}