import { fetchDetailBlog } from "@/lib/client";
import { Card, CardContent, Container, Typography } from "@mui/material";
import parse from "html-react-parser";

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const blog = await fetchDetailBlog(params.id);

  return blog ? (
    <Container maxWidth="md" sx={{ marginTop: 3, marginBottom: 3 }}>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Typography variant="h3" component="h3" fontWeight="bold">
            {blog.title}
          </Typography>
          <Typography variant="body1" component="div">
            {parse(blog.body)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  ) : null;
};

export default BlogDetail;
