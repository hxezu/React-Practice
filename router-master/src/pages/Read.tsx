import { useParams } from "react-router";

export default function Read() {
  const params = useParams();
  return (
    <>
      <h1>Read Component : {params.a}</h1>
    </>
  );
}
