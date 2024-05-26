import { Card, Container, Typography } from "@mui/material";
import { fetchAllBlogs } from "@/lib/client";
import BlogListMain from "@/components/BlogListMain";

export default async function Home() {
  const allBlogs = await fetchAllBlogs();

  return (
    <Container maxWidth="md">
      <Card
        sx={{ margin: 5, marginLeft: "10px", marginRight: "10px", padding: 3 }}
      >
        <Typography variant="body1" fontWeight="bold">
          私生活や業務で考えたことを書き出したり、技術分野のメモをまとめるためのブログ。
        </Typography>
      </Card>
      <BlogListMain allBlogs={allBlogs} />
    </Container>
  );
}
