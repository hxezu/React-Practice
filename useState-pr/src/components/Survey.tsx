import TextInput from "./TextInput";
import Select from "./Select";
import { useState } from "react";

const countryOptions = ["한국", "중국", "일본", "러시아", "미국"];

export default function Survey() {
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    address: "",
  });
  return (
    <>
      <div>
        <div className="bg-white w-[400px] p-8 rounded-lg flex flex-col gap-5">
          <div className="formItem">
            <TextInput
              title="1. 이름이 무엇인가요?"
              value={formValue.name}
              setValue={(value) => {
                setFormValue((prev) => ({ ...prev, name: value }));
              }}
            />
          </div>
          <div className="formItem">
            <Select
              title="2. 사는 곳은 어딘가요?"
              value={formValue.country}
              setValue={(value) => {
                setFormValue((prev) => ({ ...prev, country: value }));
              }}
              options={countryOptions}
            />
          </div>
          {formValue.country === "한국" ? (
            <div className="formItem">
              <TextInput
                title="2-1. 한국 어디에 사나요?"
                value={formValue.address}
                setValue={(value) => {
                  setFormValue((prev) => ({ ...prev, address: value }));
                }}
              />
            </div>
          ) : null}

          <div className="w-[100%] flex justify-center">
            <button
              className="w-[20%] bg-amber-300 disabled:bg-amber-100 disabled:text-white rounded-lg p-1"
              onClick={() => {
                alert(
                  `저장되었습니다.\n\n이름: ${formValue.name}\n사는 곳: ${formValue.country}\n상세 주소: ${formValue.address}`
                );
                setFormValue({
                  name: "",
                  country: "",
                  address: "",
                });
              }}
              disabled={!formValue.name || !formValue.country}
            >
              저장
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
