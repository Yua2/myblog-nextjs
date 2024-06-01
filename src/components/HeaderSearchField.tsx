"use client";

import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { pageNumAtom } from "@/recoil/atom";
import { useRecoilState } from "recoil";
import { createPortal } from "react-dom";

const SearchField = () => {
  const router = useRouter();
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);
  const matches = useMediaQuery("(min-width:655px)");
  const [isMounted, setIsMounted] = useState(false);

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
      (event.target as HTMLInputElement).value = "";
    },
    [router, setPageNum]
  );

  // レンダリング時にマウント状態をtrueにする
  // 仕様デバイスがスマートフォンの場合はcreatePortalを使って描画するため、isMountedが必要
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return matches ? (
    <TextField
      variant="outlined"
      size="small"
      placeholder="記事を検索"
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
  ) : (
    isMounted &&
      createPortal(
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="記事を検索"
          sx={{ padding: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onKeyDown={handleKeyDown}
        />,
        document.getElementsByClassName("smartphone-header-spacer")[0]
      )
  );
};
export default SearchField;
