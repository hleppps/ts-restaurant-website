import { MealProps } from "../interfaces";

const meals: MealProps[] = [
  {
    id: "c1",
    title: "Spicy seasoned seafood noodles",
    price: 2.29,
    availability: 20,
    imageUrl: "https://i.imgur.com/sIApIrb.png",
  },
  {
    id: "c2",
    title: "Salted Pasta with mushroom sauce",
    price: 2.69,
    availability: 11,
    imageUrl: "https://i.imgur.com/RBZZS8n.png",
  },
  {
    id: "c3",
    title: "Beef dumpling in hot and sour soup",
    price: 3.29,
    availability: 16,
    imageUrl: "https://i.imgur.com/KKE7sjq.png",
  },
  {
    id: "c4",
    title: "Healthy noodle with spinach leaf",
    price: 3.49,
    availability: 22,
    imageUrl: "https://i.imgur.com/KXrDPoB.png",
    
  },
  {
    id: "c5",
    title: "Spicy instant noodle with special omelette",
    price: 3.59,
    availability: 17,
    imageUrl: "https://i.imgur.com/XnzSqT1.png",
  },
  {
    id: "c6",
    title: "Hot spicy fried rice with omelet",
    price: 2.59,
    availability: 12,
    imageUrl: "https://i.imgur.com/Klwn82i.png",
  },
  {
    id: "c7",
    title: "Hot spaghetti with chicken",
    price: 3.19,
    availability: 10,
    imageUrl: "https://i.imgur.com/UCXxURo.png",
  },
];

export const getMealById = (mealId: string): MealProps => {
  const soughtMeal = meals.find((meal) => meal.id === mealId)!;
  return soughtMeal;
};

export default meals;
