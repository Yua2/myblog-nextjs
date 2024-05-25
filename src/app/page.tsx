import { Card, Container, Typography } from "@mui/material";
import BlogList from "@/components/BlogList";
import BlogPagination from "@/components/BlogPagination";
import { fetchAllBlogs } from "@/lib/client";

export default async function Home() {
  const allBlogs = await fetchAllBlogs();

  return (
    <Container maxWidth="md" className="znc">
      <Card sx={{ margin: 5, marginLeft: "10px", padding: 3 }}>
        <Typography variant="body1" fontWeight="bold">
          私生活や業務で考えたことを書き出したり、技術分野のメモをまとめるためのブログ。
        </Typography>
      </Card>
      {allBlogs.length > 0 && (
        <>
          <BlogList allBlogs={allBlogs} />
          <BlogPagination totalBlogNum={allBlogs.length} />
        </>
      )}
    </Container>
  );
}
