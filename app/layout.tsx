import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const helveticaNeue = localFont({
  src: [
    { path: "/fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "/fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "/fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
  ],
});

const libreBasVil = localFont({
  src: [
    {
      path: "/fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/LibreBaskerville-Italic.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/LibreBaskerville-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.className} ${libreBasVil.className} antialiased`}
      >
        <main className="lg:px-16 px-6">{children}</main>
      </body>
    </html>
  );
}
