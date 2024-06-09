"use client";

import { allBlogTagsAtom, allBlogsAtom, pageNumAtom } from "@/recoil/atom";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { blogsPerPage } from "@/constants/constants";
import { BlogTagType, BlogType } from "@/types/types";
import parse from "html-react-parser";
import { useSearchParams } from "next/navigation";
import BlogList from "./BlogList";
import BlogPagination from "./BlogPagination";
import { Typography, Container, useMediaQuery } from "@mui/material";
import MainSearchField from "./MainSearchField";
import BlogDescription from "./BlogDescription";

type BlogListMainProps = {
  allBlogs: BlogType[];
  allBlogTags: BlogTagType[];
};
const BlogListMain = ({ allBlogs, allBlogTags }: BlogListMainProps) => {
  const [blogList, setBlogList] = useRecoilState(allBlogsAtom);
  const [blogTagList, setBlogTagList] = useRecoilState(allBlogTagsAtom);
  const [pageNum, setPageNum] = useRecoilState<number>(pageNumAtom);
  const searchParams = useSearchParams();
  const searchWord = searchParams.get("search");
  const matches = useMediaQuery("(min-width:655px)");

  // 検索ワードに一致するブログを取得
  const filteredBlogs = useMemo(() => {
    if (!searchWord || searchWord === "すべて") return allBlogs;

    return allBlogs.filter((blog) => {
      if (blog.title.includes(searchWord)) return true;

      const parsedBody = parse(blog.body).toString();
      if (parsedBody.includes(searchWord)) return true;

      return blog.tags.some((tag) => tag.name.includes(searchWord));
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

  useEffect(() => {
    setBlogList(allBlogs);
    setBlogTagList(allBlogTags);
  }, [allBlogTags, allBlogs, setBlogList, setBlogTagList]);

  return (
    <Container maxWidth="md" sx={{ marginTop: "10px", marginBottom: "10px" }}>
      {searchWord && matches ? (
        <MainSearchField searchWord={searchWord} />
      ) : (
        <BlogDescription />
      )}
      {displayedBlogs.length === 0 ? (
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          記事が見つかりませんでした。
        </Typography>
      ) : (
        <>
          <BlogList displayedBlogs={displayedBlogs} />
          <BlogPagination
            count={maxPage}
            page={pageNum}
            onChange={handleChange}
          />
        </>
      )}
    </Container>
  );
};
export default BlogListMain;
