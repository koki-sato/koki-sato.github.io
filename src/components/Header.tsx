import Link from 'next/link'
import React from 'react'
import useToggle from 'react-use/lib/useToggle'

const Header: React.FC = () => {
  const [open, toggle] = useToggle(false)
  const toggleNav = () => toggle()

  return (
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <span className="is-size-5">Portfolio</span>
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
                <Link href="/about" passHref={true}>
                  <button className="button is-white">About</button>
                </Link>
                <a href="http://k-sato.hatenablog.com/">
                  <button className="button is-white">Blog</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
