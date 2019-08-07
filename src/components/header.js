import React, { useState, useRef } from "react"
import { useWindowDimensions } from "../utilhooks/windowDim"
import useOnClickOutside from "../utilhooks/useOnClickOutside"

export default function Header() {

  const { width } = useWindowDimensions();
  const collapseWidth = 1000;
  const headerRef = useRef();

  const [navDisplay, activateNavDisplay] = useState(false)

  useOnClickOutside(headerRef, () => activateNavDisplay(false))

  const links = [
    <li key={1}><a href="#search">Search</a></li>,
    <li key={2}><a href="#my-shows">My Shows</a></li>,
    <li key={3}><a href="#hot">What's Hot</a></li>,
    <li key={4}><a href="#new">What's New</a></li>
  ]

  return (

    <div className="container" ref={headerRef}>
      <header className="flex-row header space-around">
        <h1>No More Showhole</h1>
        {width >= collapseWidth
          ? <ul className="nav-links">{links}</ul >
          :
          <button
            className={`menu-bar-${navDisplay}`}
            onClick={() => activateNavDisplay(!navDisplay)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
        }
      </header>
      <ul
        onMouseLeave={() => activateNavDisplay(!navDisplay)}
        onMouseOut={() => activateNavDisplay(!navDisplay)}
        onClick={() => activateNavDisplay(!navDisplay)}
        className={`menu-dropdown-${navDisplay}`}>
        {navDisplay === true && width < collapseWidth && links}
      </ul>
    </div >

  )
}

