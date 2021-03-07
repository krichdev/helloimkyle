import React from "react"

import Header from "./header"
import "../styles/style.css"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
