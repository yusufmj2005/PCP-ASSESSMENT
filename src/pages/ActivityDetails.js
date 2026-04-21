import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const ActivityDetails = () => {
    const { id } = useParams();
    const { state } = useContext(AppContext);

    const activity = (state.data || []).find(
        (item) => String(item.ActivityId) === id
    );

    if (!activity) return <p>Activity Not Found</p>;

    const efficiency =
        Number(activity.caloriesBurned) /
        Number(activity.workoutMinutes) || 0;

    return (
        <div>
            <h2>{activity.name}</h2>

            <p>Steps: {activity.steps}</p>
            <p>Calories Burned: {activity.caloriesBurned}</p>
            <p>Workout Minutes: {activity.workoutMinutes}</p>
            <p>Date: {activity.date}</p>
            <p>
                Goal Achieved: {activity.goalAchieved ? "Yes" : "No"}
            </p>


            <p>Efficiency Score: {efficiency.toFixed(2)}</p>
        </div>
    );
};

export default ActivityDetails;