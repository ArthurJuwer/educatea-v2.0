import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "EducaTEA",
  description: "Plataforma educacional EducaTEA",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
