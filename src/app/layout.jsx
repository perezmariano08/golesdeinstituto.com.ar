import { Albert_Sans } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import './globals.css'

export const metadata = {
    title: 'Next.js',
    description: 'Descripcion'
}

const albertSans = Albert_Sans({
    weight: ['400'],
    subsets: ['latin'],
    preload: true,
})

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={albertSans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}