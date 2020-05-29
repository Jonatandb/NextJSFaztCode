import Head from "next/head";
import Container from "../components/Container";
import fetch from "isomorphic-unfetch";
import User from "../components/User";

const Index = ({ users }) => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Next JS</h1>
      <User data={users} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const result = await res.json();
  return { users: result.data };
};

export default Index;
