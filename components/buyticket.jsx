import React from 'react'
import Link from 'next/link'
const Buyticket = ({children}) => {
  return (
    <Link href='/event' className='flex justify-center'><button className='btnprimary'>{children?children:'Buy Ticket'}</button></Link>
  )
}

export default Buyticket