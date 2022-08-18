import BikeItem from "./bikeItem"

// Bike List Component, maps all bikes to the BikeItem component
export default function BikeList({ bikes }) {
    return (
        <div>
            {
                bikes.map(bike => {
                    return (
                       <BikeItem key={bike.BikeID} bike={bike}></BikeItem>
                    )
                })
            }
        </div>
    )
}