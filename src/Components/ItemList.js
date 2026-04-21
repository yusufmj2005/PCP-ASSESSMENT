import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Link to={`/activities/${item.ActivityId}`}>
                    <div data-testid="activity-item">{item.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default ItemList;