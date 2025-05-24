"use client";

import { useState } from "react";
import { Input } from "@/components/input";
import { InputAnimation } from "@/components/inputAnimation";
import { HandleForm } from "@/utils/actionContact";
import SenEmails from "../../utils/SenEmails";
import data from '@/json/data';
import types from "@/components/fontLetters";

export default function Contact() {
  const [formState, setFormState] = useState(null);

  async function handleSubmit(formData) {
    const result = await HandleForm(formData);
    setFormState(result);
  }

  const contactData = data?.contact?.[0];

  if (!contactData) return null;

  return (
    <div
      className="flex justify-center items-center my-56 py-56 max-lg:my-28 max-lg:py-28 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/image/figure.png)" }}
    >
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-1 w-full">
          {/* TITLE */}
          <div className="text flex justify-center items-center">
            <h1 className={`${types.h1} text-[#525252] flex flex-col justify-center items-center gap-2 max-lg:text-center`}>
              {contactData.titleForm.map(({ text, color, delay }, index) => (
                <InputAnimation key={index} delay={delay}>
                  <span className={`${color ? "text-[#000000] max-lg:!text-3xl !text-7xl" : ""}`}>
                    {text}
                  </span>
                </InputAnimation>
              ))}
            </h1>
          </div>

          {/* FORM */}
          <form
            className="flex flex-col gap-4 border-2 p-5 rounded-2xl m-9 px-8 py-5"
            action={handleSubmit}
          >
            <span className={types.smallP}>We are going to start a new business</span>

              {contactData.form.map((inputGroup, groupIndex) => (
                <div className="flex gap-5" key={groupIndex}>
                  {Object.entries(inputGroup).map(([key, fieldData], fieldIndex) => {
                    const inputInfo = fieldData[0];
                    const error = formState?.errors?.[inputInfo.name]?._errors?.[0];

                    return (
                      <div className="flex flex-col w-full" key={`${groupIndex}-${key}-${fieldIndex}`}>
                        <Input
                          type={inputInfo.type}
                          name={inputInfo.name}
                          placeholder={inputInfo.placeholder}
                          inputType={inputInfo.inputType}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                      </div>
                    );
                  })}
                </div>
              ))}
            <button type="submit" className="border-2 p-2 rounded-lg hover:bg-[#0000000b]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {formState?.success && <SenEmails />}
    </div>
  );
}
