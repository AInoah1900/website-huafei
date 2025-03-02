import Document, { Head, Html, Main, NextScript } from 'next/document';
import { OrganizationJsonLd } from 'next-seo';
import { getCssText } from '../stitches.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          <OrganizationJsonLd
            url="http://localhost:3000"
            logo="http://localhost:3000/static/logo.svg"
            name="华飞科技"
          />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <meta charSet="utf-8" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed for the-guild.dev"
            href="/feed.xml"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
