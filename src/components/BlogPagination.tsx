"use client";

import { blogsPerPage } from "@/constants/constants";
import { allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { Pagination } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

type BlogPaginationProps = {
  totalBlogNum: number;
};
const BlogPagination = ({ totalBlogNum }: BlogPaginationProps) => {
  useRecoilValue(allBlogsAtom);
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);

  // ページ数を計算
  const count = useMemo(
    () => Math.floor(totalBlogNum / blogsPerPage) + 1,
    [totalBlogNum]
  );

  // ページネーションのページ変更時の処理
  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPageNum(value);
    },
    [setPageNum]
  );

  return <Pagination count={count} page={pageNum} onChange={handleChange} />;
};

export default BlogPagination;
