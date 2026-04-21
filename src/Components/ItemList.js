import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/Appcontext";

const ItemList = ({ items }) => {
    const { dispatch } = useContext(AppContext);

    return (
        <div>
            {(items || []).map((item) => (
                <div key={item.ActivityId}>

                    <Link to={`/activities/${item.ActivityId}`}>
                        <div data-testid="activity-item">{item.name}</div>
                    </Link>

                    <p>
                        Goal: {item.goalAchieved ? "Achieved" : "Not Achieved"}
                    </p>
                    <button
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_GOAL",
                                payload: item.ActivityId
                            })
                        }
                    >
                        Toggle Goal
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;