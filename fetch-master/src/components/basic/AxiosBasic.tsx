import { useEffect, useState, useTransition } from "react";
import { axiosInstance } from "../../api/axiosInstance";

{
  /*
    axios.get
    axios.post
    axios.put
    axios.patch
    axios.delete
     */
}
export default function AxiosBasic() {
  const [posts, setPosts] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const fetchPosts = async () => {
    try {
      const { data } = await axiosInstance.get("/posts");
      setPosts(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown Error");
    }
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
    //   console.log(result.data);
    // });
    startTransition(async () => {
      await fetchPosts();
    });
  }, []);

  if (isPending) return <h1>Loading...</h1>;
  if (error) return <h1>Error : {error}</h1>;
  return (
    <>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
}
