import App from 'next/app';

import { ReduxProvider } from '../providers';
// TODO refactor
import '../styles/globals.css';

export default class MyApp extends App {
  static async getInitialProps(Component, ctx) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // Anything returned here can be access by the client
    return { pageProps };
  }

  render() {
    // pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <ReduxProvider>
        <Component {...pageProps} />
      </ReduxProvider>
    );
  }
}
