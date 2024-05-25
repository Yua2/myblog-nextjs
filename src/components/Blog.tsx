import { BlogType } from "@/types/types";
import { Card, CardContent, Chip, Typography } from "@mui/material";
import Link from "next/link";

type BlogProps = {
  blog: BlogType;
};
const Blog = ({ blog }: BlogProps) => {
  return (
    <Link href={`/blogDetail/${blog.id}`} key={blog.id}>
      <Card key={blog.id} style={{ margin: "10px" }}>
        <CardContent style={{ maxHeight: "110px", overflow: "hidden" }}>
          <Typography variant="body2" component="div">
            {new Date(blog.updatedAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Typography>
          <Typography variant="h5" component="h2">
            {blog.title}
          </Typography>
          <div>
            {blog.tags.length > 0 &&
              blog.tags.map((tag) => (
                <Chip key={tag.id} label={tag.name} style={{ margin: "5px" }} />
              ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export { Blog };
