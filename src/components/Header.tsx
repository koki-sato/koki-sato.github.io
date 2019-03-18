import Link from 'next/link'
import { withRouter, WithRouterProps } from 'next/router'
import React from 'react'

interface State {
  isActive: boolean
}

class Header extends React.Component<WithRouterProps, State> {
  constructor(props: WithRouterProps) {
    super(props)

    this.state = {
      isActive: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  public render() {
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="is-size-5">Portfolio</a>
            </Link>
            <a className="navbar-burger burger" onClick={this.toggleNav}>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
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

  private toggleNav() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }))
  }
}

export default withRouter(Header)
