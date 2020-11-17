import "antd/dist/antd.css";
import "@/styles/normalize.css";
import "@/styles/global.scss";
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
