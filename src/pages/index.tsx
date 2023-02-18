import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const fetchFromNotion = async () => {
 const response = await fetch('http://localhost:3000/api/notion')
 const data =await response.json()
 return JSON.parse(data)
}
export default function Home() {
const [items, setItems] = useState<any>([])
  useEffect(() => {
    
    fetchFromNotion().then((response) =>{console.log(response.results[0].properties); setItems(response.results)})


    //Name response.results[0].properties.Name.title[0].plain_text
    //image response.results[0].properties.Image.files[0].name
    //Content response.results[0].properties.Content.rich_text[0].plain_text
    //Link response.results[0].properties.Link.url

  }, [])
  
  return (
    <>
    {items.map((item:any,i:number) =>(
     <div key={i}>{item.properties.Name.title[0].plain_text}</div>

    ))}
    <div>ola</div>

    </>
  )
}
