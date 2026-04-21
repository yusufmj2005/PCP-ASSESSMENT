import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import ItemList from "../Components/ItemList";

const Filter = () => {
    const { state, dispatch } = useContext(AppContext);

    return (
        <div>
            <input
                data-testid="filter-input"
                placeholder="Search"
                onChange={(e) =>
                    dispatch({ type: "FILTER", payload: e.target.value })
                }
            />
            <ItemList items={state.filtered} />
        </div>
    );
};

export default Filter;