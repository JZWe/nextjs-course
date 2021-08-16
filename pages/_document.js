import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDoucment extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="notification-container"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDoucment;
