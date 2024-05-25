"use client";

import { fetchAllBlogs } from "@/lib/client";
import { allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Blog } from "./Blog";
import { blogsPerPage } from "@/constants/constants";

const BlogList = () => {
  const [blogList, setBlogList] = useRecoilState(allBlogsAtom);
  const pageNum = useRecoilValue(pageNumAtom);

  const displayedBlogs = useMemo(
    () => blogList.slice((pageNum - 1) * blogsPerPage, pageNum * blogsPerPage),
    [blogList, pageNum]
  );

  // 初期表示時に全ブログを取得
  useEffect(() => {
    const fetchData = async () => {
      const allBlogs = await fetchAllBlogs();
      setBlogList(allBlogs);
    };
    fetchData();
  }, [setBlogList]);

  return (
    displayedBlogs.length > 0 &&
    displayedBlogs.map((blog) => <Blog blog={blog} key={blog.id} />)
  );
};
export default BlogList;
