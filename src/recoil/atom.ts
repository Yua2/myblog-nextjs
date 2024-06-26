import { BlogTagType, BlogType } from "@/types/types";
import { atom } from "recoil";

export const allBlogsAtom = atom<BlogType[]>({
  key: "allBlogs",
  default: [],
});

export const pageNumAtom = atom<number>({
  key: "pageNum",
  default: 1,
});

export const allBlogTagsAtom = atom<BlogTagType[]>({
  key: "allBlogTags",
  default: [],
});
