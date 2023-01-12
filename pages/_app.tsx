import "../styles/index.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import store from "../store/authSlice";
import Layout from "../components/Layout";
import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout title="Coding Latam | Comunidad de desarrolladores">
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
