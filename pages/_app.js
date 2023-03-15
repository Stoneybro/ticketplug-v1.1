import '@/styles/globals.css'
import { Questrial} from 'next/font/google'

const questrial=Questrial({
  weight:['400'],
  subsets: ['latin'],
  variable:'--font-questrial'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${questrial.className}`}>
    <Component {...pageProps} />
    </main>
    )
}
