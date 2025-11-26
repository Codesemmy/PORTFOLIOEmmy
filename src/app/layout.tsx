import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A modern developer portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
