import '@/styles/globals.css'

import { SessionProvider } from 'next-auth/react'
import { Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable:'poppins',
  weight:['100','200','300','400','500','600','700','800','900']

});



export default function App({ Component, pageProps:{session,...pageProps} }) {
  return (
    <main className={`${poppins.className} `}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
    </main>
    )
}
