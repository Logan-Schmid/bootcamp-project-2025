import React from "react";
import styles from "./blogPreview.module.css";
import Image from "next/image";
import { Blog } from "@/app/blogData";

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
}: Blog) {
  return (
    <div id={styles["blog-container"]}>
      <div className={styles["blog-entry"]}>
        <h2 className={styles["blog-entry-title"]}>{title}</h2>
        <div>
          <Image
            className={styles["blog-entry-image"]}
            src={image}
            alt={imageAlt}
            width={300}
            height={300}
          ></Image>
          <p className={styles["blog-entry-description"]}>{description}</p>
          <p className={styles["blog-entry-date"]}>{date}</p>
        </div>
      </div>
    </div>
  );
}
