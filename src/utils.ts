import { createContext, useContext } from "react";

export interface FoodType  {
    id: number;
    restaurant: string;
    dish: string;
    originalPrice: number;
    discount: number;
    quantity: number;
    expiry: string
}

export const mockSpecials: FoodType[] = [
    {
        id: 1,
        restaurant: "Campus Cafe",
        dish: "Vegetable Wrap",
        originalPrice: 8.99,
        discount: 40,
        quantity: 5,
        expiry: "14:30"
    },
    {
        id: 2,
        restaurant: "Hotel Cafe",
        dish: "Chicken Sandwich",
        originalPrice: 9.99,
        discount: 35,
        quantity: 1,
        expiry: "20:00"
    },
    {
        id: 3,
        restaurant: "Deluxe Cuisines",
        dish: "Spaghetti Alfredo",
        originalPrice: 54.99,
        discount: 60,
        quantity: 2,
        expiry: "22:00"
    },
    {
        id: 4,
        restaurant: "Base Lounge",
        dish: "Jollof Rice",
        originalPrice: 15.00,
        discount: 20,
        quantity: 5,
        expiry: "00:00"
    },
    
]

type FoodContextType = {
    specials: FoodType[],
    setSpecials: (specials: FoodType[]) => void
    reservations: FoodType[],
    setReservations: (reservation: FoodType[]) => void
}

export const FoodContext = createContext<FoodContextType | null>(null);

export function useFoodContext() {
    const context = useContext(FoodContext);
    if (context === null) {
        throw new Error("useFood must be used within a ThemeProvider");
    }
    return context
}