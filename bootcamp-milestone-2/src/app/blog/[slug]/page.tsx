import React from "react";
import Image from "next/image";
import { Blog, blogs } from "@/app/blogData";
import { notFound } from "next/navigation";
import styles from "@/components/blogPreview.module.css";

export default function BlogEntryPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <main id={styles["blog-container"]}>
      <div className={styles["blog-entry"]}>
        <h1 className={styles["blog-entry-title"]}>{blog.title}</h1>
        <div>
          <Image
            className={styles["blog-entry-image"]}
            src={blog.image}
            alt={blog.imageAlt}
            width={500}
            height={500}
          ></Image>
          <p className={styles["blog-entry-description"]}>{blog.description}</p>
          <p className={styles["blog-entry-date"]}>{blog.date}</p>
        </div>
      </div>
    </main>
  );
}
