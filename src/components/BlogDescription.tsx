import { Card, Typography } from "@mui/material";

const BlogDescription = () => {
  return (
    <Card sx={{ marginTop: 3, marginBottom: 3 }}>
      <Typography variant="body1" fontWeight="bold" sx={{ padding: 3 }}>
        私生活や業務で考えたことを書き出したり、技術分野のメモをまとめるためのブログ。
      </Typography>
    </Card>
  );
};

export default BlogDescription;
