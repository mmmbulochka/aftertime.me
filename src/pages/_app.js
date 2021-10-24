import App from 'next/app';
import '../styles/globals.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../theme';
import Header from '../components/header';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
