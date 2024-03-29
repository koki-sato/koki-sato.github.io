import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import Footer from '~/src/components/Footer'
import Header from '~/src/components/Header'

import 'bulma/css/bulma.min.css'
import '~/src/styles/index.scss'

class MyApp extends App {
  public override componentDidMount() {
    if ('serviceWorker' in navigator && navigator.serviceWorker) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          if (registration.installing) {
            console.log('ServiceWorker installing')
          } else if (registration.waiting) {
            console.log('ServiceWorker installed')
          } else if (registration.active) {
            console.log('ServiceWorker active')
          }
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed with ' + error)
        })
    }
  }

  public override render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Koki Sato</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="A portfolio page of Koki Sato" />
          <meta name="msapplication-TileColor" content="#0078d7" />
          <meta name="msapplication-square70x70logo" content="/ms-icon-70x70.png" />
          <meta name="msapplication-square150x150logo" content="/ms-icon-150x150.png" />
          <meta name="msapplication-square310x310logo" content="/ms-icon-310x310.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="google-site-verification"
            content="jJ6xDDJwsIAbtywtwhU_HSs5WUjCAnGyltqMQfddcQg"
          />
        </Head>
        <div className="allWrapper">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default MyApp
