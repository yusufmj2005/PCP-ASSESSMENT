const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            const cleanedData = action.payload.filter((item) => {
                return (
                    item &&
                    item.ActivityId !== undefined &&
                    item.name &&
                    typeof item.goalAchieved === "boolean"
                );
            });
            return {
                ...state,
                data: cleanedData,
                filtered: cleanedData
            };
        case "FILTER":
            return {
                ...state,
                filtered: state.data.filter((item) =>
                    item.name
                        ?.toLowerCase()
                        .includes(action.payload.toLowerCase())
                )
            };

        default:
            return state;
    }
};
export default AppReducer;