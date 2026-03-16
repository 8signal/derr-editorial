import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Edit Derr — Executive Editing for Leaders Who Can't Afford to Sound Generic",
  description:
    "Executive editing for C-suite leaders, business authors, and operators. AI catches the errors. I catch what AI creates. Book editing, executive communications, and ongoing editorial partnership.",
  keywords: [
    "executive editor",
    "book editor",
    "copy editor",
    "business nonfiction editor",
    "AI content editing",
    "voice preservation",
    "manuscript editing",
  ],
  openGraph: {
    title: "The Edit Derr — Executive Editing",
    description:
      "Your words should sound like the sharpest version of you. Executive editing for leaders who can't afford to sound generic.",
    type: "website",
    locale: "en_US",
    // url: "https://theeditderr.com", // Uncomment when domain is live
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
