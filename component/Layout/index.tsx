import React from 'react'
import Header from '../Header'
import { LayoutProps } from '../models/layout'


const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout