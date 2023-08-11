import Navbar from "@/components/customComponents/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "BASIC/DEPT",
  description:
    "a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
