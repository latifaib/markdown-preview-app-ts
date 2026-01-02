import { useQuery } from "@tanstack/react-query";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<Post[]> => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;
  if (!data) return null;

  return (
    <ul>
      {data.slice(0, 5).map((post: Post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

