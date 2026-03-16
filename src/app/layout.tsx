import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Cori Inc.",
    description: "Brindando soluciones tecnológicas integrales de alta ingeniería. Expertos en IA, Software, Automatización y Domótica.",
    keywords: "tecnología, software, IA, inteligencia artificial, automatización, domótica, IoT, consultoría, Argentina",
    icons: {
        icon: [
            { url: "/images/logofinal.png", media: "(prefers-color-scheme: light)" },
            { url: "/images/logofinal_white.png", media: "(prefers-color-scheme: dark)" }
        ],
        apple: "/images/logofinal.png"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
