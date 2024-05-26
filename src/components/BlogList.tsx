import { Blog } from "./Blog";
import { BlogType } from "@/types/types";

type BlogListProps = {
  displayedBlogs: BlogType[];
};
const BlogList = ({ displayedBlogs }: BlogListProps) => {
  return (
    displayedBlogs.length > 0 &&
    displayedBlogs.map((blog) => <Blog blog={blog} key={blog.id} />)
  );
};
export default BlogList;
