import React from 'react'
// components
import HeaderTop from './HeaderTop'
import HeaderNavigation from './HeaderNavigation'

const Header = () => {
  return (
    <>
      <header id="header" className="px-2">
        <HeaderTop />

        <HeaderNavigation />        
      </header>
    </>
  )
}

export default Header