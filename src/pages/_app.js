import App from 'next/app';
import '../styles/globals.css';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '../styletron';

import Header from '../components/header';

function MyApp({Component, pageProps}) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <div>
          <Header />
          <Component {...pageProps} />
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
