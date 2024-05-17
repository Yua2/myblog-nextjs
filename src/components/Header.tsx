import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link href="/">My Blog</Link>
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
