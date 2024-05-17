import { Container, Typography } from "@mui/material";
import { fetchAllBlogs } from "../lib/client";
import { Blog } from "@/components/Blog";

export default async function Home() {
  const blogs = await fetchAllBlogs();
  return (
    <Container maxWidth="md" className="znc">
      <Typography variant="h1" component="h1" gutterBottom>
        Yua2のブログ
      </Typography>
      <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
        私生活や業務で考えたことを書き出したり、技術分野のメモをまとめるためのブログ。
      </Typography>
      {blogs && blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
    </Container>
  );
}
