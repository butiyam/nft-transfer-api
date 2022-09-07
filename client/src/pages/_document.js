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
  <body className="bg-gray-900 text-gray-50">
  <Main className="p-10">
    <header className="flex justify-between items-center">
      <h1 className="font-semibold"><center>My NFTs</center></h1>
      <div id="current_address" hidden className="bg-blue-100 px-4 py-1 text-sm rounded-full text-black font-semibold"></div>
    </header>


        </Main>
          <NextScript />
 
          <link rel="stylesheet" href="assets/css/style.css" />
          <script src="assets/js/custom.js"></script>
</body>
      </Html>
    )
  }
}

export default MyDocument