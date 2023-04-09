import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import { SessionProvider } from 'next-auth/react'
import { Poppins} from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable:'poppins',
  weight:['100','200','300','400','500','600','700','800','900']

});



export default function App({ Component, ...rest}) {
  
  const {store,props}=wrapper.useWrappedStore(rest)
  const{pageProps,session}=props
  return (
    <main className={`${poppins.className} `}>
      <Provider store={store}>
      <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
      </Provider>
      
    </main>
    )
}
