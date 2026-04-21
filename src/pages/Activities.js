import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import ItemList from "../Components/ItemList";

const Activities = () => {
    const { state } = useContext(AppContext);

    return <ItemList items={state.data} />;
};
export default Activities;