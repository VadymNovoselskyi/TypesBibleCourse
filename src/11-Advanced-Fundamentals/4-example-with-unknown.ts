interface Post {
  title: string;
  body: string;
  date: Date;
}

interface FetchService {
  fetchPosts(): unknown;
}

const service: FetchService = {
  fetchPosts: () => {
    return "Fetched data";
  },
};

const data = service.fetchPosts();

if (typeof data === "string") {
  console.log(data.toLowerCase());
} else if (isPost(data)) {
  const { body } = data;
}

function isPost(data: unknown): data is Post {
  return typeof data === "object" && data !== null && "body" in data;
}
