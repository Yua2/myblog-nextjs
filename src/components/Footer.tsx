import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", color: "white", padding: 2 }}>
      <Typography variant="h6" component="div">
        Yua2ブログ
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
          トップ
        </Link>
        <Link href="/profile" color="inherit">
          プロフィール
        </Link>
      </Box>
    </Box>
  );
};
export default Footer;
