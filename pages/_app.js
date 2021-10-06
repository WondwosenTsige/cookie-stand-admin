import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../reduxStore";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    // <Component {...pageProps} />
  );
}

export default MyApp;
