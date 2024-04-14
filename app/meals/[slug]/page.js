import { getMeal } from "@/lib/meals";
import style from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
const MealsDetalsPage = ({ params }) => {
  const meal = getMeal(params.slug);
  !meal && notFound();
  // console.log(meal);
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image} alt="meal image" fill />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        >
          {/* {meal.instructions} */}
        </p>
      </main>
    </>
  );
};

export default MealsDetalsPage;
