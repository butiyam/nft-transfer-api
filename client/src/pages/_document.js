import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>

        </Head>
        <Main />
          <NextScript />
 
          
          <script src="assets/js/custom.js"></script>

      </Html>
    )
  }
}

export default MyDocument