import { ThemeProvider } from "@material-tailwind/react";
import '../styles/main.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
