"use client";

import {
  TextField,
  InputAdornment,
  useMediaQuery,
  TextFieldVariants,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { pageNumAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";
import SmallSearchField from "./SmallSearchField";

const SearchField = () => {
  const router = useRouter();
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);
  const matches = useMediaQuery("(min-width:655px)");

  const commonProps = {
    variant: "outlined" as TextFieldVariants,
    size: "small" as "small" | "medium",
    placeholder: "記事を検索",
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    },
  };

  // キーが押されたときの処理
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      // Enterキーでない場合や、入力が空の場合は何もしない
      if (
        event.key !== "Enter" ||
        !(event.target as HTMLInputElement).value?.trim()
      )
        return;

      // 検索クエリをエンコードしてURLに追加
      const queryParams = encodeURIComponent(
        (event.target as HTMLInputElement).value.trim()
      );
      router.push(`/?search=${queryParams}`);
      setPageNum(1);
      if (matches) {
        (event.target as HTMLInputElement).value = "";
      }
    },
    [matches, router, setPageNum]
  );

  return matches ? (
    <TextField
      {...commonProps}
      sx={{ marginRight: 2 }}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <SmallSearchField onKeyDown={handleKeyDown} />
  );
};
export default SearchField;
