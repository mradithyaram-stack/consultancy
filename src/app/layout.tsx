import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopStrip from "./components/TopStrip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swan Global | Study Abroad Consultants in Hyderabad",
  description: "No.1 Consultant for Australia & New Zealand in Hyderabad. Expert guidance for university selection, SOP, and visa processing.",
  keywords: ["Study Abroad Consultants in Hyderabad", "New Zealand consultants Hyderabad", "Australia visa default", "Study in UK"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased">
        <TopStrip />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
