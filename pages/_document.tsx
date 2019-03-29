import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public render() {
    return (
      <html lang="en">
        <Head />
        <body className="has-navbar-fixed-top">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
