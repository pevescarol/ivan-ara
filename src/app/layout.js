
import "./globals.css";

export const metadata = {
  title: "Ivan & Ara | Invitación Civil y Fiesta",
  description: "Invitación Civil y Fiesta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
