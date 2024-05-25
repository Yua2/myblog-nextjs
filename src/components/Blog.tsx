import { BlogType } from "@/types/types";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

type BlogProps = {
  blog: BlogType;
};
const Blog = ({ blog }: BlogProps) => {
  return (
    <Link href={`/blogDetail/${blog.id}`} key={blog.id}>
      <Card key={blog.id} style={{ margin: "10px" }}>
        <CardContent style={{ maxHeight: "110px", overflow: "hidden" }}>
          <Typography variant="h5" component="h2">
            {blog.title}
          </Typography>
          <Typography variant="body2" component="div">
            {new Date(blog.updatedAt).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" component="div"></Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export { Blog };
