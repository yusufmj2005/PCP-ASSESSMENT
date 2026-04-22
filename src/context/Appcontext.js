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
                    "https://t4e-testserver.onrender.com/api",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            studentId: "e0423018",
                            set: "setB"
                        })
                    }
                );

                if (!tokenRes.ok) {
                    throw new Error(`Token request failed: ${tokenRes.status} ${tokenRes.statusText}`);
                }

                const tokenData = await tokenRes.json();

                if (!tokenData.token) {
                    throw new Error("No token received from server");
                }

                const token = tokenData.token;

                const dataRes = await fetch(
                    "https://t4e-testserver.onrender.com/api/private/activities",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (!dataRes.ok) {
                    throw new Error(`Data request failed: ${dataRes.status} ${dataRes.statusText}`);
                }

                const data = await dataRes.json();
                dispatch({ type: "SET_DATA", payload: data });
            } catch (err) {
                console.error("Failed to load activities:", err);
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