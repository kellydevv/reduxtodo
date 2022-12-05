import React from "react";
import Header from "../components/UI/Header";
import Layout from "../components/UI/Layout";
import Form from "../features/todos/components/Form";
import List from "../features/todos/components/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
