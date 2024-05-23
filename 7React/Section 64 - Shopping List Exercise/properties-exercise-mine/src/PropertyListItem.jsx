export default function PropertyListItem({ name, rating, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{price} per night</h4>
            <p>{rating} stars</p>
        </div>
    )
}