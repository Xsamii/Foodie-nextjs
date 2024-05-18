import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { S3 } from "@aws-sdk/client-s3";

const s3 = new S3({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

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
///commennsadsa

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  s3.putObject({
    Bucket: "as-foodie-images.s3.eu-north-1.amazonaws.com",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });
  // stream.write(Buffer.from(bufferedImage), (error) => {
  //   if (error) {
  //     throw new Error("saving image failed");
  //   }
  // });

  meal.image = fileName;
  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES(
      @title,
      @instructions,
      @creator,
      @creator_email,
      @summary,
      @image,
      @slug
    )
    `
  ).run(meal);
}
