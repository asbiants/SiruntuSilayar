import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SIRUNTU SILAYAR",
  description: "KKN-PPM Universitas Gadjah Mada Tahun 2024 yang dilaksanakan di Kecamatan Bontosikuyum Kabupaten Kepulauan Selayar, Provinsi Sulawesi Selatan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
