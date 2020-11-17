import { Input } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputValueState, filterdInputValue } from "../store";
import Head from "next/head";
import Layout from "@/components/Layout";
import Test from "@/components/Test.js";

const Index = () => {
  const [value, setValue] = useRecoilState(inputValueState);
  const filterValue = useRecoilValue(filterdInputValue);
  return (
    <Layout>
      <Head>
        <title>My page title</title>
        <script src="/static/js/rem.js" />
      </Head>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>filterValue:{filterValue}</div>
      <br />
      <Test />
    </Layout>
  );
};

export default Index;
