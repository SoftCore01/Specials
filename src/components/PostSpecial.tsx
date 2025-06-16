import { useRef } from "react";
import { useFoodContext } from "../utils";
import { useNavigate, Link } from "react-router-dom";

export default function PostSpecial() {
  const { specials, setSpecials } = useFoodContext();
  const navigate = useNavigate();

  const formRef = useRef<HTMLFormElement>(null);

  const postSpecial = () => {
    const newSpecial = [...specials];
    const formData = new FormData(formRef.current!);
    newSpecial.push({
      id: newSpecial[newSpecial.length - 1].id + 1,
      restaurant: String(formData.get("restaurant")),
      dish: String(formData.get("dish")),
      originalPrice: parseInt(String(formData.get("price"))),
      discount: parseInt(String(formData.get("discount"))),
      quantity: parseInt(String(formData.get("quantity"))),
      expiry: String(formData.get("expiry")),
    });
    setSpecials(newSpecial);
    navigate("/");
  };

  return (
    <form
      className="form-container"
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        postSpecial();
      }}
    >
      <h2>Post a Special</h2>
      <label htmlFor="restaurant" className="form-label">
        Restaurant name:
        <input
          className="form-input"
          type="text"
          name="restaurant"
          id="restaurant"
          placeholder="e.g The Place"
          required
        />
      </label>
      <label htmlFor="dish" className="form-label">
        DIsh name:
        <input
          className="form-input"
          type="text"
          name="dish"
          id="dish"
          placeholder="e.g Rice"
          required
        />
      </label>
      <label htmlFor="Price" className="form-label">
        Price:
        <input
          className="form-input"
          type="number"
          min={1}
          name="price"
          id="price"
          placeholder="e.g $50"
          required
        />
      </label>
      <label htmlFor="discount" className="form-label">
        DIscount:
        <input
          className="form-input"
          type="number"
          min={1}
          name="discount"
          id="discount"
          placeholder="e.g 20"
          required
        />
      </label>
      <label htmlFor="quantity" className="form-label">
        Quantity:
        <input
          className="form-input"
          type="number"
          min={1}
          name="quantity"
          id="quantity"
          placeholder="e.g 5"
          required
        />
      </label>
      <label htmlFor="expiry" className="form-label">
        Expiry:
        <input
          className="form-input"
          type="time"
          name="expiry"
          id="expiry"
          required
        />
      </label>
      <div className="form-nav">
        <button className="form-button">Enter Special</button>
        <Link to="/">Go Home</Link>
      </div>
    </form>
  );
}
