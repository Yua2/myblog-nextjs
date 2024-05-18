import { createClient } from "microcms-js-sdk";
import { BlogType } from "../types/types";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const fetchAllBlogs = async (): Promise<BlogType[]> => {
  const allBlogs = await client.getList<BlogType>({
    endpoint: "blogs",
    customRequestInit: {
      next: {
        revalidate: 300,
      },
    },
  });
  return allBlogs.contents;
};

export const fetchDetailBlog = async (contentId: string): Promise<BlogType> => {
  const detailBlog = await client.getListDetail<BlogType>({
    endpoint: "blogs",
    contentId: contentId,
  });
  return detailBlog;
};
