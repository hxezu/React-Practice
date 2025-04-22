import { useState } from "react";
export default function Accordian({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <div>
        <div
          className="bg-[#666] text-white font-bold p-2.5 flex justify-between"
          onClick={() => {
            setIsOpened(!isOpened);
          }}
        >
          {title}
          <div>{isOpened ? "-" : "+"}</div>
        </div>

        {isOpened && (
          <div className="border-[#999] border-1 p-5">{content}</div>
        )}
      </div>
    </>
  );
}
