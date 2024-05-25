import { Container, Typography } from "@mui/material";
import BlogList from "@/components/BlogList";
import BlogPagination from "@/components/BlogPagination";

export default function Home() {
  return (
    <Container maxWidth="md" className="znc">
      <Typography variant="h1" component="h1" gutterBottom>
        Yua2のブログ
      </Typography>
      <Typography variant="body1" component="p" gutterBottom fontWeight="bold">
        私生活や業務で考えたことを書き出したり、技術分野のメモをまとめるためのブログ。
      </Typography>
      <BlogList />
      <BlogPagination />
    </Container>
  );
}
