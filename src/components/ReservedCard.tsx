import type { FoodType } from "../utils";
import { useFoodContext } from "../utils";

interface FoodCardProps extends FoodType {
    index: number
}

export default function ReservedCard(props:FoodCardProps) {
    const {specials, setSpecials, reservations, setReservations} = useFoodContext();

    const handleReturnReserve = () => {
        const tempReservations = [...reservations];
        const tempSpecial = [...specials]
        const food = tempReservations[props.index]
        tempSpecial.push(food)
        tempReservations.splice(props.index, 1);
        setReservations(tempReservations);
        setSpecials(tempSpecial)
    }

    
    return (
      <div className="reserve-card">
        <h3>{props.dish}</h3>
        <div className="price-discount">
          <p>
            <span>Price</span>
            <span>${props.originalPrice}</span>
          </p>
          <p>
            <span>Quantity</span>
            <span>{props.quantity}</span>
          </p>
          <p>
            <span>Discount(%)</span>
            <span>{props.discount}%</span>
          </p>
        </div>
        <div className="reserve-buttons">
          <button className="remove-button" onClick={handleReturnReserve}>
            Cancel reservation
          </button>
        </div>
      </div>
    );
}