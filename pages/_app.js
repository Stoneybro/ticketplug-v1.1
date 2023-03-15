import '@/styles/globals.css'
import { Red_Hat_Display} from 'next/font/google'

const questrial=Red_Hat_Display({
  weight:['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable:'--font-questrial'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${questrial.variable} font-sans`}>
    <Component {...pageProps} />
    </main>
    )
}
