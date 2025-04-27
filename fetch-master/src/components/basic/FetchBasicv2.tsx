import { useEffect, useState, useTransition } from "react";

{
  /*
    C Create - POST
    R Read - GET
    U Update - PUT/PATCH
    D Delete - DELETE    
    */
}
export default function FetchBasicV2() {
  // 총 3가지 필요 : 요청을 저장할 상태, 로딩을 처리할 상태 ,에러를 처리할 상태
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Unknown Error");
    }
  };

  useEffect(() => {
    startTransition(async () => {
      await fetchPosts();
    });
  }, []);

  if (isPending) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return <h1>Error : {error}</h1>;
  }

  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
