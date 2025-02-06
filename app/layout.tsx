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
  title: "Behind Studio - Creative Agency",
  description:
    "Behind Studio is a Yogyakarta-based creative studio specializing in strategic content, branding, and stunning visuals to help brands grow.",
  keywords: [
    "Behind Studio",
    "Creative Agency",
    "Branding",
    "Social Media Optimization",
    "Graphic Design",
    "Content Strategy",
    "Yogyakarta",
    "Marketing",
    "Digital Advertising",
  ],
  authors: [{ name: "Behind Studio", url: "https://behindstudio.com" }],
  applicationName: "Behind Studio",
  // openGraph: {
  //   title: "Behind Studio - Creative Agency",
  //   description:
  //     "We create engaging social media content, branding, and digital strategies to help brands grow and connect with their audience.",
  //   url: "https://behindstudio.com",
  //   siteName: "Behind Studio",
  //   images: [
  //     {
  //       url: "https://behindstudio.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Behind Studio - Creative Agency",
  //     },
  //   ],
  //   type: "website",
  // },
  twitter: {
    card: "summary_large_image",
    title: "Behind Studio - Creative Agency",
    description:
      "We create engaging social media content, branding, and digital strategies to help brands grow and connect with their audience.",
    // images: ["https://behindstudio.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
