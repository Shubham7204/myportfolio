import { Inter } from 'next/font/google'
import './globals.css'

// Components
import Navbar from './components/Navbar'
import Script from 'next/script'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shubham Mourya',
  description: 'Welcome to my portfolio!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></Script>
      </body>
    </html>
  )
}
