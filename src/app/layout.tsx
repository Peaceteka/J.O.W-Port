import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Wanyungu - Portfolio",
  description: "Community Health Initiatives and Strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
