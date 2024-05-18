import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "./components/MealsGrid";
import LoadingPage from "./loading-out";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals",
};
const MealsPage = async () => {
  const meals = await getMeals();
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicous meals, created{" "}
          <span className={style.highlight}>by you</span>
        </h1>
        <p>
          choose your favourite recipe and cook it yourself. it is easy and fun
        </p>
        <p className={style.cta}>
          <Link href={"/meals/share"}>share your own recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <Suspense fallback={<LoadingPage />}>
          <MealsGrid meals={meals} />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
