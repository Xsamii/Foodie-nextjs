import MealItem from "./MealItem";
import style from "./MealsGrid.Module.css";
export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={style.main}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
