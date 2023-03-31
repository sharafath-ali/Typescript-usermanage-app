import React, { useContext } from 'react'
import { UserContext } from '../context/context'
import { SContext } from '../context/searchcontext'
import './Listpro.css'
import Product from './Product'
import Section from './Section'
type Props = {}

export default function Listpro({}: Props) {
  const {users}=useContext(UserContext)
    const {filter}=useContext(SContext)
  return (
    <>
    <Section />
    <div className='Listing'>
     {
     users.filter((user: {first_name: string, last_name: string, email: string, department: string}) => user.first_name.toLowerCase().includes(filter)).map((user: {first_name: string, last_name: string, email: string, department: string}, index: number) => {
     return <Product keys={index} fn={user.first_name} ln={user.last_name} email={user.email} des={user.department} />
     }) 
     }
    </div>
    </>
  )
}