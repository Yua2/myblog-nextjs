"use client";

import { allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Blog } from "./Blog";
import { blogsPerPage } from "@/constants/constants";
import { BlogType } from "@/types/types";

type BlogListProps = {
  allBlogs: BlogType[];
};
const BlogList = ({ allBlogs }: BlogListProps) => {
  const [blogList, setBlogList] = useRecoilState(allBlogsAtom);
  const pageNum = useRecoilValue(pageNumAtom);

  const displayedBlogs = useMemo(
    () => allBlogs.slice((pageNum - 1) * blogsPerPage, pageNum * blogsPerPage),
    [allBlogs, pageNum]
  );

  // グローバルステートとしてブログデータを保持する
  useEffect(() => {
    setBlogList(allBlogs);
  }, [allBlogs, setBlogList]);

  return (
    displayedBlogs.length > 0 &&
    displayedBlogs.map((blog) => <Blog blog={blog} key={blog.id} />)
  );
};
export default BlogList;
