import { NextResponse } from "next/server";

// ============================================================
// API de contacto — Escuela Bilingüe Santo Domingo Savio
// Lista para integrar con Resend cuando se configure la API key.
// ============================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validación
    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push("El nombre es obligatorio (mínimo 2 caracteres).");
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push("El correo electrónico es obligatorio y debe tener formato válido.");
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.push("El mensaje es obligatorio (mínimo 10 caracteres).");
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // TODO: Integrar con Resend cuando se tenga la API key
    // const { data, error } = await resend.emails.send({
    //   from: "Santo Domingo Savio <contacto@santodomingosavio.edu.pa>",
    //   to: "admisiones@santodomingosavio.edu.pa",
    //   replyTo: email,
    //   subject: `Contacto web: ${name}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // Por ahora, simulamos envío exitoso
    console.warn("[Contacto] Modo simulación — integra Resend para envío real:", {
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido. Nos pondremos en contacto pronto.",
    });
  } catch (error) {
    console.error("[Contacto] Error:", error);
    return NextResponse.json(
      { success: false, errors: ["Error interno del servidor. Intenta de nuevo más tarde."] },
      { status: 500 },
    );
  }
}
