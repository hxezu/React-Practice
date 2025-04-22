//import Accordian from "./components/Accordian";
import Survey from "./components/Survey";

export default function App() {
  return (
    <>
      <div className="bg-amber-200 w-[100vw] h-[100vh] flex justify-center items-center">
        {/* <Accordian title="This is a title" content="This is content" /> */}
        <Survey />
      </div>
    </>
  );
}
