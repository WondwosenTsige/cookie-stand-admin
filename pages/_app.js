import "tailwindcss/tailwind.css";
import { AuthProvider } from "../contexts/auth"
import { store } from "../reduxStore";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider store={store}>
      <Component {...pageProps} />
    </AuthProvider>
    // <Component {...pageProps} />
  );
}

export default MyApp;
