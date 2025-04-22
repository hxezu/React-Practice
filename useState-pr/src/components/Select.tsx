export default function Select({
  title,
  value,
  setValue,
  options = [],
}: {
  title: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
}) {
  return (
    <>
      <h1 className="text-[#152c6e] font-bold text-[16px] mb-3">{title}</h1>
      <select
        className="w-[50%]"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="" disabled>
          지역을 선택해주세요
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
