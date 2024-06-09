"use client";

import { TextField } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import TagMenu from "./TagMenu";

type SmallSearchFieldProps = {
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SmallSearchField = ({ onKeyDown }: SmallSearchFieldProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const searchParam = useSearchParams();
  const searchWord = searchParam.get("search");

  const handleClick = useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <SearchIcon
        style={{ cursor: "pointer", marginBottom: 3 }}
        onClick={handleClick}
      />
      {isOpened &&
        isMounted &&
        createPortal(
          <TextField
            key={searchWord}
            defaultValue={searchWord}
            fullWidth
            variant="outlined"
            size="small"
            placeholder="記事を検索"
            sx={{ padding: 2 }}
            InputProps={{
              startAdornment: <SearchIcon />,
              endAdornment: <TagMenu />,
            }}
            onKeyDown={onKeyDown}
          />,
          document.getElementsByClassName("smartphone-header-spacer")[0]
        )}
    </>
  );
};

export default SmallSearchField;
