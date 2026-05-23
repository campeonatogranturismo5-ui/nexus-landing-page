import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus | Futuro Conectado",
  description: "Experiencia digital moderna creada con Grok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white antialiased">{children}</body>
    </html>
  );
}
