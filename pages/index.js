import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Logo from '../public/images/ticket-logo.svg'
import Nav from '@/components/nav'
import Cardcontainer from '@/components/Cardcontainer'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'


export default function Home() {
  console.log(Logo);
  return (
    <>
      <Head>
        <title>Ticket plug</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <Cardcontainer />
      <Subscribe />
      <Footer />
     </>
  )
}
