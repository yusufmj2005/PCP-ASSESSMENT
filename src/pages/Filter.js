import { useContext, useState } from "react";
import { AppContext } from "../context/Appcontext";
import ItemList from "../Components/ItemList";

const Filter = () => {
    const { state, dispatch } = useContext(AppContext);

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const handleFilter = () => {
        // Empty input
        if (input.trim() === "") {
            setError("Please enter a value");
            return;
        }

        // Invalid input — use Number.isNaN for reliable string-to-number check
        const parsed = Number(input.trim());
        if (Number.isNaN(parsed) || parsed < 0) {
            setError("Invalid input");
            return;
        }

        // Valid
        setError("");
        dispatch({ type: "FILTER_STEPS", payload: parsed });
    };

    return (
        <div>
            <input
                data-testid="filter-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter minimum steps"
            />

            <button onClick={handleFilter}>Filter</button>

            {error && <p>{error}</p>}

            <ItemList items={state.filtered} />
        </div>
    );
};

export default Filter;