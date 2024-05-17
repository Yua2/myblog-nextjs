import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", color: "white", padding: 2 }}>
      <Typography variant="h6" component="div">
        MyBlog
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        <Link href="/" color="inherit">
          ホーム
        </Link>
        <Link href="/about" color="inherit">
          アバウト
        </Link>
        <Link href="/contact" color="inherit">
          コンタクト
        </Link>
      </Box>
    </Box>
  );
};
export default Footer;
