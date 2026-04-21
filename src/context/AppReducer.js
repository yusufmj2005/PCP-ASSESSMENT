const AppReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            const validData = (action.payload || []).filter((item) => {
                return (
                    item &&
                    item.ActivityId !== undefined &&
                    item.name &&
                    Number(item.steps) > 0 &&
                    Number(item.caloriesBurned) > 0 &&
                    Number(item.workoutMinutes) > 0 &&
                    typeof item.goalAchieved === "boolean"
                );
            });

            return {
                ...state,
                data: validData,
                filtered: validData
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