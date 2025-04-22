export default function TextInput({
  title,
  value,
  setValue,
}: {
  title: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <>
      <div>
        <h1 className="text-[#152c6e] font-bold text-[16px] mb-2">{title}</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </>
  );
}
