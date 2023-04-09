import React, { useState } from 'react'
import Sidebar from '@/components/sidebar'
import Layout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'
import nodes from '@/lib/sampledata'
import {CompactTable} from '@table-library/react-table-library/compact'
import {useTheme} from '@table-library/react-table-library/theme'
import {getTheme} from '@table-library/react-table-library/baseline'
import {AiOutlineSearch} from 'react-icons/ai'

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


const events = () => {
  const [search,setSearch]=useState('')
  console.log(search);
  const data={
    nodes:nodes.filter((items)=>{
   return items.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })
  }
  console.log(data);
  return (
    <Layout>
      <Sidebar>
      <div className="">
        <div className="flex justify-between py-8 px-12">
        <div className="text-2xl font-semibold">Events</div>
        <label htmlFor="" className="w-3/12 flex border border-[#00000] border-solid rounded-full items-center gap-2 px-2">
          <AiOutlineSearch color='gray' />
          <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='search...' className=' outline-0' />
        </label>
        </div>
            
            <div className="">
              <CompactTable columns={COLUMNS} data={data} theme={theme} />
            </div>
        </div>
      </Sidebar>
    </Layout>
  )
}

export default events