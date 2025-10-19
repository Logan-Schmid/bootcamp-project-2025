import Link from "next/link";
import BlogPreview from "@/components/blogPreview";
import { blogs } from "@/app/blogData";

export default function Blog() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>
      {blogs.map((blog) => (
        <Link key={blog.slug} href={"/blog/" + blog.slug}>
          <BlogPreview {...blog} />
        </Link>
      ))}
    </main>
  );
}
