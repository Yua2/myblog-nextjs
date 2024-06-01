import { fetchAllBlogs } from "@/lib/client";
import BlogListMain from "@/components/BlogListMain";

export default async function Home() {
  const allBlogs = await fetchAllBlogs();

  return <BlogListMain allBlogs={allBlogs} />;
}
