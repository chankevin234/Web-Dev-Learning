import './PropertyList.css'
import PropertyListItem from "./PropertyListItem";

export default function PropertyList({ properties }) {
    // create a map of <li>s (id, name, rating, price)
    
    return (
        <div className="PropertyList">
            {properties.map((property) => (
                <PropertyListItem
                    key={property.id}
                    name={property.name}
                    rating={property.rating}
                    price={property.price}
                />
            ))}

        </div>
    )
}