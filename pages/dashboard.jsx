import React from 'react'
import Sidebar from '@/components/sidebar'
import Layout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'
import nodes from '@/lib/sampledata'

import {CompactTable} from '@table-library/react-table-library/compact'
import {useTheme} from '@table-library/react-table-library/theme'
import {getTheme} from '@table-library/react-table-library/baseline'
import {HiEllipsisHorizontal} from 'react-icons/hi'
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
  } from "@table-library/react-table-library/table";



 const theme = useTheme({
    HeaderRow: `
        .th{
            padding:10px 0px 10px 50px;
            font-weight:500;
        }
        background-color:#F7F8FA;
        font-size:14px;
        color:#8B8C94;

      `,
      Cell: `
      padding: 15px 0px 15px 50px;
      font-size:12px;
      border-bottom:2px solid #F9F9F9;
    `,
    Table: `
        padding-right:50px;

      `,
      Body: `
      margin-left:30px;
    `,
  });


 const COLUMNS=[
    {
        label:'Events',renderCell:(item)=>item.title
    },
    {
        label:'Tickets created',renderCell:(item)=>item.created
    },
    {
        label:'Ticket sold',renderCell:(item)=>item.sold
    },
    {
        label:'Total revenue',renderCell:(item)=>item.revenue
    },
    {
        label:'',renderCell:(item)=><Link href={`/events/${item.title}`}>View details</Link>
    },
    {
        label:'',renderCell:(item)=><div>...</div>
    },
    
]
const dashboard = () => {
    
   const data={nodes}
    console.log(data);


  return (
    <Layout>
    <Sidebar>
    <main className='flex flex-col gap-6 py-10'>


        {/* Summary */}
        <div className=" flex flex-col gap-4 px-[50px]"> 
            <div className="text-2xl font-semibold">Summary</div>

            <div className=" flex gap-16">

                {/* sold tickets */}
                <div className="w-60 h-40 relative flex flex-col justify-between p-4 ">
                    <Image src={'/images/created.png'} fill className='absolute top-0 left-0 -z-10' />
                    <span className='  font-semibold'>Total ticket sold</span>
                    <span className='text-4xl text-accent font-semibold'>534</span>
                </div>

                {/* events created */}
                <div className="w-60 h-40 relative flex flex-col justify-between p-4" >
                <Image src={'/images/sold.png'} fill className='absolute top-0 left-0 -z-10' />
                <span className='  font-semibold'>Events created</span>
                    <span className='text-4xl text-accent font-semibold'>4</span>
                </div>

            </div>
        </div>

        {/* EVENTS */}

        <div className="">
            <div className="text-2xl font-semibold ml-[50px] mb-4">Events</div>
            <div className="">
              <CompactTable columns={COLUMNS} data={data} theme={theme} />
            </div>
        </div>
    </main>
    </Sidebar>
    </Layout>
  )
}

export default dashboard