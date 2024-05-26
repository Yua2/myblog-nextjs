"use client";

import { allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { blogsPerPage } from "@/constants/constants";
import { BlogType } from "@/types/types";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";

type BlogListMainProps = {
  allBlogs: BlogType[];
};
const BlogListMain = ({ allBlogs }: BlogListMainProps) => {
  const [blogList, setBlogList] = useRecoilState(allBlogsAtom);
  const allblogs = useRecoilValue(allBlogsAtom);
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");

  // 検索ワードに一致するブログを取得
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
      if (!searchWord) return true;
      const parsedBody = parse(blog.body).toString();
      return (
        blog.title.includes(searchWord) ||
        parsedBody.includes(searchWord) ||
        blog.tags.some((tag) => tag.name.includes(searchWord))
      );
    });
  }, [allBlogs, searchWord]);

  // 表示するブログを取得
  const displayedBlogs = useMemo(
    () =>
      filteredBlogs.slice((pageNum - 1) * blogsPerPage, pageNum * blogsPerPage),
    [filteredBlogs, pageNum]
  );

  // ページネーションの最大ページ数を計算
  const maxPage = useMemo(() => {
    const quotient = Math.floor(filteredBlogs.length / blogsPerPage);
    return filteredBlogs.length % blogsPerPage === 0 ? quotient : quotient + 1;
  }, [filteredBlogs]);

  // ページネーションのページ変更時の処理
  const handleChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setPageNum(value);
    },
    [setPageNum]
  );

  // グローバルステートとしてブログデータを保持する
  useEffect(() => {
    setBlogList(allBlogs);
  }, [allBlogs, setBlogList]);

  return (
    <>
      <BlogList displayedBlogs={displayedBlogs} />
      <BlogPagination count={maxPage} page={pageNum} onChange={handleChange} />
    </>
  );
};
export default BlogListMain;
