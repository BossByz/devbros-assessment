// BikeItem component
export default function BikeItem({ bike }) {
    return (
        // Display details of each bike
        <div className="p-2 m-2 text-center rounded bg-slate-700 lg:max-w-4xl">
            <p>Make: {bike.Make}</p>
            <p>Year: {bike.Year}</p>
            <p>Displacement: {bike.Displacement}cc</p>
            <p>Price: {(bike.Price).toLocaleString('en-ZA', {
                style: 'currency',
                currency: 'ZAR',
            })}</p>
            <p className="p-2">Description:</p>
            <p className="text-center">{bike.Description}</p>
            <button className="checkout">CHECKOUT</button>
        </div>
    )
}