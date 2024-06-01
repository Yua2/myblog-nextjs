"use client";

import { pageNumAtom } from "@/recoil/atom";
import { BlogTagType } from "@/types/types";
import { Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

type TagCardProps = {
  tag: BlogTagType;
};
const TagCard = ({ tag }: TagCardProps) => {
  const router = useRouter();
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);

  const handleClick = useCallback(() => {
    const queryParams = encodeURIComponent(tag.name);
    router.push(`/?search=${queryParams}`);
    setPageNum(1);
  }, [router, setPageNum, tag.name]);

  return (
    <Chip
      label={tag.name}
      style={{ margin: "5px" }}
      clickable
      onClick={handleClick}
    />
  );
};

export default TagCard;
