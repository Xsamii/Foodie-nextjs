"use server";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalid(text) {
  return !text || text.trim() === "";
}

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  // console.log(meal);
  if (
    isInvalid(meal.title) ||
    isInvalid(meal.summary) ||
    isInvalid(meal.instructions) ||
    isInvalid(meal.creator) ||
    isInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("invalid input");
    return {
      message: "Invalide input",
    };
  }
  try {
    await saveMeal(meal);
  } catch (error) {
    return {
      message: error.message,
    };
  }
  // console.log("iam here ");
  // redirect("/meals");
  revalidatePath("/meals");
  redirect("/meals");
};
