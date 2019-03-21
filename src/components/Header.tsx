import Link from 'next/link'
import React from 'react'
import { useToggle } from 'react-use'

const Header: React.FC = () => {
  const [open, toggle] = useToggle(false)
  const toggleNav = () => toggle()

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="is-size-5">Portfolio</a>
          </Link>
          <a className="navbar-burger burger" onClick={toggleNav}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={open ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link href="/about">
                  <button className="button is-white">About</button>
                </Link>
                <Link href="/contact">
                  <button className="button is-white">Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
