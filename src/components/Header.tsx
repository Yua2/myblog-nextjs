import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { Box, IconButton, Typography } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Link from "next/link";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Box
          border={1}
          bgcolor="#2196f3"
          borderColor="#2196f3"
          borderRadius={1}
        >
          <Link href="/">
            <Typography variant="h5" color="white" sx={{ paddingInline: 3 }}>
              Yua2ブログ
            </Typography>
          </Link>
        </Box>
        <Box flexGrow={1} />
        <SearchField />
        <Link href="/">
          <IconButton
            color="inherit"
            sx={{ flexDirection: "column", color: "#2196f3" }}
          >
            <HomeOutlined />
            <Typography variant="caption">トップ</Typography>
          </IconButton>
        </Link>
        <Link href="/profile">
          <IconButton sx={{ flexDirection: "column", color: "#2196f3" }}>
            <Person2OutlinedIcon />
            <Typography variant="caption">プロフィール</Typography>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
