"use client"

import { Input } from "@/components/input";
import { HandleForm } from "@/utils/actionContact";
import data from '@/json/data';
import types from "@/components/fontLetters";
import { InputAnimation } from "@/components/inputAnimation";
import SenEmails from "../../utils/SenEmails";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState(null);

  async function handleSubmit(formData) {
    const result = await HandleForm(formData);
    setFormState(result); // Si fue exitoso, se mostrará el mensaje
  }
  return (
    <div className="flex justify-center items-center my-56 py-56 max-lg:my-28 max-lg:py-28 bg-cover bg-no-repeat bg-center" style={{backgroundImage : "url(/image/figure.png)"}}>
      <div className="container flex justify-center items-center">
          <div className="grid grid-cols-1 w-full max-lg:grid-cols-1">
            <div className="text flex justify-center items-center">
              <h1 className={`${types.h1} text-[#525252] flex flex-col justify-center items-center gap-2 max-lg:text-center max-lg:items-center`}>
                  {data && data.contact[0].titleForm.map((dataTitle, _index)=>(
                    <span className={`${dataTitle.color ? "text-[#000000] max-lg:!text-3xl !text-7xl" : ""}`}>
                      <InputAnimation key={_index} delay={`${dataTitle.delay}`}>
                        {dataTitle.text} 
                      </InputAnimation>
                    </span>
                  ))}
              </h1>
            </div>
            <form className="flex flex-col gap-4 border-2 p-5 rounded-2xl m-9 px-8 py-5" action={handleSubmit}>
              <span className={`${types.smallP}`}>We are going to start a new business</span>
              {data.contact[0].form.map((data, _index)=>(
                <div className="flex gap-5" key={_index}>
                  {Object.entries(data).map((dataInput, _indexInput)=>(
                    <Input
                      key={_indexInput}
                      type={dataInput[1][0].type}
                      name={dataInput[1][0].name}
                      placeholder={dataInput[1][0].placeholder}
                      inputType={dataInput[1][0].inputType}
                    />
                  ))}
                </div>
              ))}
              <button type="submit" className="border-2 p-2 rounded-lg hover:bg-[#0000000b]">Submit</button>
            </form>
          </div>
      </div>
      {formState?.success && <SenEmails />}
    </div>
  )
}