import './globals.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Tema
import 'primereact/resources/primereact.min.css'; // Core
import 'primeicons/primeicons.css'; // Iconos

import { Albert_Sans } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'

// PrimeReact core + theme + icons


export const metadata = {
    title: 'Goles de Instituto',
    description: 'Descripcion'
}

const albertSans = Albert_Sans({
    weight: ['100','200', '300','400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    preload: true,
})

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body className={albertSans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}