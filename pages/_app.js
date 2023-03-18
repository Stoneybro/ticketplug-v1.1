import '@/styles/globals.css'
import next from 'next'
import { SessionProvider } from 'next-auth/react'
import { Red_Hat_Display} from 'next/font/google'

const lora = Red_Hat_Display({
  subsets: ['latin'],
  variable:'red_hat'
});



export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <main className={`${lora.className} font-primary`}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </main>
    )
}
