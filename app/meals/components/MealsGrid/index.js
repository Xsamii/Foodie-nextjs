import { getMeals } from "@/lib/meals";
import MealItem from "./MealItem";
import style from "./MealsGrid.Module.css";
export default async function MealsGrid() {
  const meals = await getMeals();
  return (
    <ul className={style.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
