import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  public override render() {
    return (
      <Html lang="en">
        <Head />
        <body className="has-navbar-fixed-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
