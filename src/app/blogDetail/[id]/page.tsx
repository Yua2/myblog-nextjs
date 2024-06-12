import TagCard from "@/components/TagCard";
import { fetchDetailBlog } from "@/lib/client";
import { Card, CardContent, Container, Typography } from "@mui/material";
import parse from "html-react-parser";
import "zenn-content-css";

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const blog = await fetchDetailBlog(params.id);

  return blog ? (
    <Container maxWidth="md" sx={{ marginTop: 3, marginBottom: 3 }}>
      <Card sx={{ padding: 2 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {blog.title}
          </Typography>
          {blog.tags.map((tag) => (
            <TagCard key={tag.id} tag={tag} />
          ))}
          <Typography variant="body2" component="div" style={{ opacity: 0.5 }}>
            <span style={{ marginRight: 10 }}>
              最終更新日:{" "}
              {new Date(blog.updatedAt).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
            投稿日:
            {new Date(blog.createdAt).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            style={{ marginTop: 20, fontSize: "1.0rem" }}
            className="znc"
          >
            {parse(blog.body)}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  ) : (
    <div>該当記事を取得することが出来ませんでした。</div>
  );
};

export default BlogDetail;
