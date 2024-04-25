"use client";

import { useRef, useState } from "react";
import style from "./image-picker.module.css";
import Image from "next/image";
import { shareMeal } from "@/lib/actions";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedimage] = useState();
  const handlePickButtonClick = () => {
    console.log(imageInput);
    imageInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedimage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedimage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={style.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={style.controls}>
        <div className={style.preview}>
          {!pickedImage && <p>no image picked yet</p>}
          {pickedImage && <Image src={pickedImage} alt="image selected" fill />}
        </div>
        <input
          className={style.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          required
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickButtonClick}
          className={style.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
