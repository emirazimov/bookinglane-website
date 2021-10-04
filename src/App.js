// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { Header } from "./components"

import { Helmet } from "react-helmet"
import { lazy, Suspense } from "react"

const Header = lazy(() => import("./components/Header"))

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <meta
          name="description"
          content="Comprehensive mobile CRM software for transportation companies"
        />
        <meta itemprop="name" content="Reed" />
        <meta
          itemprop="description"
          content="Comprehensive mobile CRM software for transportation companies"
        />
        <meta itemprop="description" content="Book" />
        <meta itemprop="description" content="Booking" />
        <meta
          itemprop="image"
          content="http://reedbarger.com/static/ca-styled-logo-5205dbb0983e1531d228c98584ab5711.png"
        />
      </Helmet> */}

      <Suspense
        fallback={
          <div style={{ color: "black", fontSize: "20px" }}>Loading....</div>
        }
      >
        <Header />
      </Suspense>
    </div>
  )
}

export default App
