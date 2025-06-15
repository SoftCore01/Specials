import type { FoodType } from "../utils";
import { useFoodContext } from "../utils";

interface FoodCardProps extends FoodType {
    index: number
}

export default function FoodCard(props:FoodCardProps) {
    const {specials, setSpecials, reservations, setReservations} = useFoodContext();

    const removeExpiredSpecials = () => {
        const tempSpecial = [...specials];
        tempSpecial.splice(props.index, 1);
        setSpecials(tempSpecial);
    }

    const reserveSpecial = () => {
        const tempReservations = [...reservations];
        tempReservations.push(specials[props.index])
        setReservations(tempReservations);
        removeExpiredSpecials()
    }
    
    return (
      <div className="food-card">
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
        <div className="buttons">
          <button
            className="remove-button"
            onClick={removeExpiredSpecials}
          >
            Remove
          </button>
          <button className="reserve-button" onClick={reserveSpecial}>
            Reserve Now
          </button>
        </div>
      </div>
    );
}