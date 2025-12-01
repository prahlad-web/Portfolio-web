import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* RevPie Tracking Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _clcktt = _clcktt || {};
                _clcktt['cId'] = "117499";
                document.write('<div id="clcktt"></div>');
                (function() {
                  var ca = document.createElement('script'); 
                  ca.type = 'text/javascript';
                  ca.async = true;
                  ca.src = '//revpie.com/api/js/extractor.js';
                  var sc = document.getElementsByTagName('script')[0]; 
                  sc.parentNode.insertBefore(ca, sc);
                })();
              `,
            }}
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
