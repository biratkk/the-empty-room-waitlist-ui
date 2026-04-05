import { Playfair_Display, DM_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "The Empty Room — London",
  description:
    "A network of pre-bookable quiet rooms across London. No phone. No demands. No performance. Just a comfortable chair and a door that closes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", playfair.variable, dmSans.variable)}
    >
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
