import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Red_Hat_Display} from 'next/font/google'

const red_hat=Red_Hat_Display({
  weight:['300','400','500','600','700','800','900'],
  subsets: ['latin'],
  variable:'--font-red_hat'
})


export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <main className={`${red_hat.variable} font-redhat`}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </main>
    )
}
