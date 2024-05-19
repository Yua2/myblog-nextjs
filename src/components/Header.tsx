import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, IconButton, Typography } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1} />
        <IconButton color="inherit" href="/" sx={{ flexDirection: "column" }}>
          <HomeOutlined />
          <Typography variant="caption">トップ</Typography>
        </IconButton>
        <IconButton
          color="inherit"
          href="/profile"
          sx={{ flexDirection: "column" }}
        >
          <Person2OutlinedIcon />
          <Typography variant="caption">プロフィール</Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
