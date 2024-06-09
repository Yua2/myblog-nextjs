import { BlogType } from "@/types/types";
import { Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import "zenn-content-css";
import TagCard from "./TagCard";

type BlogProps = {
  blog: BlogType;
};
const Blog = ({ blog }: BlogProps) => {
  return (
    <Card style={{ marginTop: "10px", marginBottom: "10px" }}>
      <CardContent>
        <Typography component="div">
          {new Date(blog.createdAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </Typography>
        <Link href={`/blogDetail/${blog.id}`} key={blog.id} className="znc">
          <Typography component="h2" style={{ margin: 5 }}>
            {blog.title}
          </Typography>
        </Link>
        {blog.tags.map((tag) => (
          <TagCard tag={tag} key={tag.id} />
        ))}
      </CardContent>
    </Card>
  );
};

export { Blog };
