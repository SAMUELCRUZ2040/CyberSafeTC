"use server"

import { SendEmail } from "@/lib/brevo"

export async function HandleForm( FormData ){
    const name = FormData.get('nameUser')
    const email = FormData.get('email')
    const phone = FormData.get('phone')
    const message = FormData.get('message')

    if(!name || !email || !phone || !message){
        throw new Error("Todos los campos son obligatorios")
    }
    console.log(name, email, phone, message)
      await SendEmail({
        to: [
            {name:  name , email: "samuelcruz2040@gmail.com"}
        ],
        htmlContent : message + phone,
        email: email
      })

      return { success: true };
}