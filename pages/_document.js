import Document from 'next/document';

import { JssProvider } from '../providers';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider>
            <App {...props} />
          </JssProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
}
