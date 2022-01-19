import App from 'next/app';
import '../styles/globals.css';

import Header from '../components/header';

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
