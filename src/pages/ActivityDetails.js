import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const ActivityDetails = () => {
    const { id } = useParams();
    const { state } = useContext(AppContext);

    const activity = state.data.find(
        (item) => String(item.ActivityId) === id
    );

    if (!activity) return <p>Not Found</p>;

    return (
        <div>
            <h2>{activity.name}</h2>
            <p>Steps: {activity.steps}</p>
            <p>Calories: {activity.caloriesBurned}</p>
            <p>Workout: {activity.workoutMinutes}</p>
            <p>Goal: {activity.goalAchieved ? "Yes" : "No"}</p>
        </div>
    );
};

export default ActivityDetails;