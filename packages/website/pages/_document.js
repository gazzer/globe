import Document, { Head, Main, NextScript } from 'next/document'
import { renderToSheetList } from 'fela-dom'

import { createFelaRenderer } from '@gazzer/globe'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = createFelaRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const sheetList = renderToSheetList(renderer)

    return {
      ...initialProps,
      sheetList,
    }
  }

  render() {
    const styleNodes = this.props.sheetList.map(
      ({ type, rehydration, support, media, css }) => (
        <style
          dangerouslySetInnerHTML={{ __html: css }}
          data-fela-rehydration={rehydration}
          data-fela-support={support}
          data-fela-type={type}
          key={type + media}
          media={media}
        />
      )
    )

    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width,height=device-height,initial-scale=1,minimum-scale=1,viewport-fit=cover"
          />
          <meta name="viewport" content="viewport-fit=cover" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="no" />
          <meta name="apple-mobile-web-app-title" content="Globe" />
          <meta name="application-name" content="Globe" />
          <meta name="msapplication-TileColor" content="#00b0a4" />
          <meta name="theme-color" content="#ffffff" />

          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
