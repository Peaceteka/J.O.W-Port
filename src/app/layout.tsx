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
      <body className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
