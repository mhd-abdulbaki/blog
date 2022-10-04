import React from 'react'
import {Header} from "../"

const Layout:React.FC<any> = ({children}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout