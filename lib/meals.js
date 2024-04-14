import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  // throw new Error("can't find data");
  return db.prepare("select * from meals").all();
}

export function getMeal(slug) {
  return db.prepare("select * from meals where slug= ?").get(slug);
}
