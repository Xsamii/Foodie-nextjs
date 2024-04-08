import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "./components/MealsGrid";
const MealsPage = () => {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;