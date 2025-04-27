import { useTransition } from "react";
import { axiosLocalInstance } from "../../api/axiosInstance";

export default function AxiosCRUD() {
  const [isPending, startTransition] = useTransition();

  const getHandler = async () => {
    try {
      const { data, status, statusText } = await axiosLocalInstance.get(
        "/posts"
      );
      console.log(status, statusText, data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    }
  };

  const postHandler = async () => {
    startTransition(async () => {
      try {
        const { data } = await axiosLocalInstance.post("/posts", {
          id: "4",
          title: "anna",
          views: 100,
        });
        console.log(data);
      } catch (e) {
        console.log(e instanceof Error && e.message);
      }
    });
  };

  const putHandler = async () => {
    try {
      const { data } = await axiosLocalInstance.put("/posts/1", {
        title: "modify data",
        views: 500,
      });
      console.log(data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    }
  };
  const patchHandler = async () => {
    try {
      const { data } = await axiosLocalInstance.patch("/posts/1", {
        title: "modify data",
        views: 500,
      });
      console.log(data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    }
  };
  const deleteHandler = async () => {
    try {
      const { data, status, statusText } = await axiosLocalInstance.delete(
        "/posts/1"
      );
      console.log(status, statusText, data);
    } catch (e) {
      console.log(e instanceof Error && e.message);
    }
  };

  return (
    <>
      <form className="flex gap-4">
        <button type="button" onClick={getHandler}>
          GET
        </button>
        <button
          type="button"
          className="disabled:text-gray-400"
          onClick={postHandler}
          disabled={isPending}
        >
          POST
        </button>
        <button type="button" onClick={putHandler}>
          PUT
        </button>
        <button type="button" onClick={patchHandler}>
          PATCH
        </button>
        <button type="button" onClick={deleteHandler}>
          DELET
        </button>
      </form>
      {isPending && <h1>잠시만 기다려주세요...</h1>}
    </>
  );
}
