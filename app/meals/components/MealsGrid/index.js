import { getMeals } from "@/lib/meals";
import MealItem from "./MealItem";
import classes from "./MealsGrid.module.css";
export default async function MealsGrid() {
  const meals = await getMeals();
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
