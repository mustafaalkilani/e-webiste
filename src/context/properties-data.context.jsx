import { createContext, useState, useEffect } from "react";
import { getAllDocs } from '../utils/firestore.utils';

export const PropDataFetchContext = createContext({
    getProp: 'null',
    setGetProp: () => null,
    getSelectedProp: 'null',
    setGetSelectedProp: () => null
})

export const PropDataFetchProvider = ({children}) => {
    const [getProp, setGetProp] = useState(null);
    const [getSelectedProp, setGetSelectedProp] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const allDocs = await getAllDocs();
        setGetProp(allDocs);
        }
        fetchData();
    }, [])

    const value = {getProp, setGetProp, getSelectedProp, setGetSelectedProp};

    return <PropDataFetchContext.Provider value={value}>{children}</PropDataFetchContext.Provider>
}