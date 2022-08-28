import type { NextPage } from "next";
import { Counter } from "../components/counter/counter";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      <Counter description="My Counter" defaultCount={0} />
    </div>
  );
};

export default Home;
