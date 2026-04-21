import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const AppContext = createContext();

const initialState = {
    data: [],
    filtered: []
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tokenRes = await fetch(
                    "https://t4e-testserver.onrender.com/api/public/token",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            uniqueId: "E0423018",
                            set: "setB"
                        })
                    }
                );

                const tokenData = await tokenRes.json();
                const token = tokenData.token;

                const dataRes = await fetch(
                    "https://t4e-testserver.onrender.com/api/private/activities",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await dataRes.json();

                dispatch({ type: "SET_DATA", payload: data });
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};