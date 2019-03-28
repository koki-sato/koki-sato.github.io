import withGA from 'next-ga'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'

import Footer from '../src/components/Footer'
import Header from '../src/components/Header'

import 'bulma/css/bulma.min.css'
import '../src/styles/index.scss'

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Koki Sato</title>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <div className="allWrapper">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Container>
    )
  }
}

export default withGA('UA-90235017-2', Router)(MyApp)
