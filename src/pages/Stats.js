import { useContext, useEffect } from "react";
import { AppContext } from "../context/Appcontext";

const Stats = () => {
    const { state } = useContext(AppContext);

    const validData = state.data || [];

    const totalActivities = validData.length;

    const goalAchieved = validData.filter(
        (item) => item.goalAchieved === true
    ).length;

    const goalNotAchieved = validData.filter(
        (item) => item.goalAchieved === false
    ).length;

    useEffect(() => {
        window.appState = {
            totalActivities,
            goalAchieved,
            goalNotAchieved
        };
    }, [validData]);

    return (
        <div>
            <h2>Analytics Dashboard</h2>

            <p data-testid="total-activities">{totalActivities}</p>
            <p data-testid="goal-achieved">{goalAchieved}</p>
            <p data-testid="goal-not-achieved">{goalNotAchieved}</p>
        </div>
    );
};

export default Stats;