import { Equal, Expect } from "..";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
}

// Asynchronously fetches a blog post from an API.
export const fetchBlogPost = async (): Promise<Pick<BlogPost, "title" | "content">> => {
  const response = await fetch("/api/blogpost");
  return response.json();
};

const getBlogSummary = async () => {
  const post = await fetchBlogPost();

  // Extract only part of the properties: title and content.
  type test = Expect<Equal<typeof post, { title: string; content: string }>>;
};
