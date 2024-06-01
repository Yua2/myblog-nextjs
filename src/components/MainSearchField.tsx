"use client";

import { pageNumAtom } from "@/recoil/atom";
import { TextField, InputAdornment } from "@mui/material";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";

type MainSearchFieldProps = {
  searchWord: string;
};

const MainSearchField = ({ searchWord }: MainSearchFieldProps) => {
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);
  const router = useRouter();
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      event.key !== "Enter" ||
      !(event.target as HTMLInputElement).value?.trim()
    )
      return;

    const queryParams = encodeURIComponent(
      (event.target as HTMLInputElement).value
    );
    router.push(`/?search=${queryParams}`);
    setPageNum(1);
  };

  return (
    <TextField
      key={searchWord}
      fullWidth
      defaultValue={searchWord}
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
  );
};

export default MainSearchField;
