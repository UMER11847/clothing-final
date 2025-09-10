import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClothThread',
  icons: {
    icon: '/Group 14.png',
    // apple: '/apple-touch-icon.png',
  },
  description: 'Created',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: Causten, sans-serif;
}
        `}</style>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
