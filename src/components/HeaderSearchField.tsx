"use client";

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { pageNumAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";

const SearchField = () => {
  const router = useRouter();
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);

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
        (event.target as HTMLInputElement).value
      );
      router.push(`/?search=${queryParams}`);
      setPageNum(1);
      (event.target as HTMLInputElement).value = "";
    },
    [router, setPageNum]
  );

  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="記事、ジャンルを検索"
      sx={{ marginRight: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onKeyDown={handleKeyDown}
    />
  );
};
export default SearchField;
