import FoodCard from "./FoodCard";
import { useFoodContext } from "../utils";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReservedCard from "./ReservedCard";

export default function ShowSpecial() {
  const { specials, reservations } = useFoodContext();
  const [foods, setFood] = useState(specials);

  const handleFilter = (textInput: string) => {
    if (textInput == "asc") {
      const tempFoods = [...foods].sort((a, b) => a.discount - b.discount);
      setFood(tempFoods);
    } else if (textInput == "desc") {
      const tempFoods = [...foods].sort((a, b) => b.discount - a.discount);
      setFood(tempFoods);
    } else {
      setFood(specials);
    }
  };

  useEffect(() => setFood(specials), [specials]);

  return (
    <>
      <div className="filter">
        <select
          name="filter"
          id="filter"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">Filter</option>
          <option value="asc">Filter by lowest discount</option>
          <option value="desc">Filter by highest discount</option>
        </select>
        <Link to="/postspecial">Post New Specials</Link>
      </div>
      <div>
        <h2>Specials Menu</h2>
        <div className="meals">
          {foods.map((food, i) => (
            <FoodCard key={i} {...food} index={i} />
          ))}
        </div>
      </div>

      <div>
        <h2>Reserved</h2>
        <div className="meals">
          {reservations.map((food, i) => (
            <ReservedCard key={i} index={i} {...food} />
          ))}
        </div>
      </div>
    </>
  );
}
