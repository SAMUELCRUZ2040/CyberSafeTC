export function Message({ nameUser, email, phone, message }
) {
  return `
    <div style="border: 1px solid #47494912, border-radius: 1rem, padding: 5rem">
      <h2 style="color: #1d4ed8;">Nuevo mensaje de contacto 💌</h2>
      <p><strong>Nombre:</strong> ${nameUser}</p>
      <p><strong>Correo:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Mensaje:</strong></p>
      <div style="margin: 10px 0; padding: 10px; background: #f1f5f9; border-left: 4px solid #1d4ed8;">
        ${message}
      </div>
    </div>
  `;
}