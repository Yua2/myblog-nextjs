"use client";

import { blogsPerPage } from "@/constants/constants";
import { allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { Pagination } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const BlogPagination = () => {
  const blogList = useRecoilValue(allBlogsAtom);
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);

  const totalBlogNum = useMemo(() => blogList.length, [blogList]);
  const count = useMemo(
    () => Math.floor(totalBlogNum / blogsPerPage) + 1,
    [totalBlogNum]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPageNum(value);
    },
    [setPageNum]
  );

  return (
    blogList.length > 0 && (
      <Pagination count={count} page={pageNum} onChange={handleChange} />
    )
  );
};

export default BlogPagination;
