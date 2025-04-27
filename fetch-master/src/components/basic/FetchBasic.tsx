import { useEffect, useState } from "react";

{
  /*
    C Create - POST
    R Read - GET
    U Update - PUT/PATCH
    D Delete - DELETE    
    */
}
export default function FetchBasic() {
  // 총 3가지 필요 : 요청을 저장할 상태, 로딩을 처리할 상태 ,에러를 처리할 상태
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((result) => {
        setPosts(result);
      })
      .catch((error: Error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
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
