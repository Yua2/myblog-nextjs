import { fetchAllBlogTags, fetchAllBlogs } from "@/lib/client";
import BlogListMain from "@/components/BlogListMain";

export default async function Home() {
  const allBlogs = await fetchAllBlogs();
  const allBlogTags = await fetchAllBlogTags();

  return <BlogListMain allBlogs={allBlogs} allBlogTags={allBlogTags} />;
}
