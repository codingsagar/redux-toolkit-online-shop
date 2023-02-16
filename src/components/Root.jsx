import React from 'react'
import NavbarComp from './NavbarComp'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
    <NavbarComp/>
    <Outlet/>
    </>
  )
}

export default Root