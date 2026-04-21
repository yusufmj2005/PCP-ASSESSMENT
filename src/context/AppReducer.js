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
        case "FILTER_STEPS":
            return {
                ...state,
                filtered: state.data.filter(
                    (item) => Number(item.steps) >= Number(action.payload)
                )
            };
        case "FILTER_CALORIES":
            return {
                ...state,
                filtered: state.data.filter(
                    (item) => Number(item.caloriesBurned) >= Number(action.payload)
                )
            };
        case "FILTER_WORKOUT":
            return {
                ...state,
                filtered: state.data.filter(
                    (item) => Number(item.workoutMinutes) >= Number(action.payload)
                )
            };
        case "FILTER_GOAL":
            return {
                ...state,
                filtered: state.data.filter(
                    (item) => item.goalAchieved === action.payload
                )
            };
        case "FILTER_EFFICIENCY":
            return {
                ...state,
                filtered: state.data.filter(
                    (item) =>
                        Number(item.caloriesBurned) /
                        Number(item.workoutMinutes) >=
                        Number(action.payload)
                )
            };
        case "SORT_BY_EFFICIENCY":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) =>
                        Number(b.caloriesBurned) / Number(b.workoutMinutes) -
                        Number(a.caloriesBurned) / Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )
            };
        case "SORT_BY_STEPS":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.steps) - Number(a.steps)
                )
            };
        case "SORT_BY_CALORIES":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned)
                )
            };
        case "SORT_BY_WORKOUT":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.workoutMinutes) - Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_GOAL":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.goalAchieved) - Number(a.goalAchieved)
                )
            };
        case "SORT_BY_NAME":
            return {
                ...state,
                filtered: [...state.data].sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            };
        case "SORT_BY_EFFICIENCY_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) =>
                        Number(a.caloriesBurned) / Number(a.workoutMinutes) -
                        Number(b.caloriesBurned) / Number(b.workoutMinutes)
                )
            };
        case "SORT_BY_EFFICIENCY_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) =>
                        Number(b.caloriesBurned) / Number(b.workoutMinutes) -
                        Number(a.caloriesBurned) / Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_DATE_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                )
            };
        case "SORT_BY_DATE_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )
            };
        case "SORT_BY_STEPS_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.steps) - Number(b.steps)
                )
            };
        case "SORT_BY_STEPS_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.steps) - Number(a.steps)
                )
            };
        case "SORT_BY_CALORIES_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.caloriesBurned) - Number(b.caloriesBurned)
                )
            };
        case "SORT_BY_CALORIES_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned)
                )
            };
        case "SORT_BY_WORKOUT_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.workoutMinutes) - Number(b.workoutMinutes)
                )
            };
        case "SORT_BY_WORKOUT_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.workoutMinutes) - Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_GOAL_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.goalAchieved) - Number(b.goalAchieved)
                )
            };
        case "SORT_BY_GOAL_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.goalAchieved) - Number(a.goalAchieved)
                )
            };
        case "SORT_BY_NAME_ASC":
            return {
                ...state,
                filtered: [...state.data].sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            };
        case "SORT_BY_NAME_DESC":
            return {
                ...state,
                filtered: [...state.data].sort((a, b) =>
                    b.name.localeCompare(a.name)
                )
            };
        case "SORT_BY_EFFICIENCY_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) =>
                        Number(a.caloriesBurned) / Number(a.workoutMinutes) -
                        Number(b.caloriesBurned) / Number(b.workoutMinutes)
                )
            };
        case "SORT_BY_EFFICIENCY_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) =>
                        Number(b.caloriesBurned) / Number(b.workoutMinutes) -
                        Number(a.caloriesBurned) / Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_DATE_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                )
            };
        case "SORT_BY_DATE_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                )
            };
        case "SORT_BY_STEPS_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.steps) - Number(b.steps)
                )
            };
        case "SORT_BY_STEPS_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.steps) - Number(a.steps)
                )
            };
        case "SORT_BY_CALORIES_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.caloriesBurned) - Number(b.caloriesBurned)
                )
            };
        case "SORT_BY_CALORIES_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.caloriesBurned) - Number(a.caloriesBurned)
                )
            };
        case "SORT_BY_WORKOUT_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.workoutMinutes) - Number(b.workoutMinutes)
                )
            };
        case "SORT_BY_WORKOUT_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.workoutMinutes) - Number(a.workoutMinutes)
                )
            };
        case "SORT_BY_GOAL_ASC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(a.goalAchieved) - Number(b.goalAchieved)
                )
            };
        case "SORT_BY_GOAL_DESC":
            return {
                ...state,
                filtered: [...state.data].sort(
                    (a, b) => Number(b.goalAchieved) - Number(a.goalAchieved)
                )
            };
        case "SORT_BY_NAME_ASC":
            return {
                ...state,
                filtered: [...state.data].sort((a, b) =>
                    a.name.localeCompare(b.name)
                )
            };
        case "SORT_BY_NAME_DESC":
            return {
                ...state,
                filtered: [...state.data].sort((a, b) =>
                    b.name.localeCompare(a.name)
                )
            };

        default:
            return state;
    }
};
export default AppReducer;