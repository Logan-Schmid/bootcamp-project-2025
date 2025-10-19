import BlogPreview from "@/components/blogPreview";
import { blogs } from "@/app/blogData";

export default function Blog() {
  return (
    <main>
      <h1 className="page-title">Blog</h1>
      {blogs.map((blog) => (
        <BlogPreview key={blog.slug} {...blog} />
      ))}
    </main>
  );
}
