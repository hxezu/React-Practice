import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

export default function CountGroup() {
  console.log("counter group");
  return (
    <>
      <CountDisplay />
      <CountButton />
    </>
  );
}
