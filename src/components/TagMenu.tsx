"use client";

import { IconButton, MenuItem, Menu } from "@mui/material";
import { useCallback, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { allBlogTagsAtom } from "@/recoil/atom";

const TagMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [blogTagList, setBlogTagList] = useRecoilState(allBlogTagsAtom);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <TuneIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {blogTagList.map((tag) => (
          <Link key={`menu-item-link-${tag.id}`} href={`/?search=${tag.name}`}>
            <MenuItem key={`menu-item-${tag.id}`} onClick={handleClose}>
              {tag.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default TagMenu;
