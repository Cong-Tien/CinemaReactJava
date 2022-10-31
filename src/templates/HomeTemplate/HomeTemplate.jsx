import React from 'react'
import { Outlet } from 'react-router'
import FooterHome from '../../components/FooterHome/FooterHome'
import HeaderHome from '../../components/HeaderHome/HeaderHome'

export default function HomeTemplate() {
  return (
    <div>
        <HeaderHome/>
        <Outlet/>
        <FooterHome/>
    </div>
  )
}
