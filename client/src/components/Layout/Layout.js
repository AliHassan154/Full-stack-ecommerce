import React from 'react'
import Headers from "../Layout/Headers.js"
import Footers from './Footers.js'

const Layout = ({ children }) => {
  return (
    <div>
     <Headers />
     <main style={{ minHeight: "85vh" }}>
        {children}
     </main>
     <Footers />
    </div>
  )
}

export default Layout
