/* Home.jsx */

import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Featured";
import Explore from "../components/Explore";
import Discounted from "../components/Discounted";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <Discounted />
        <Explore />
      </main>
    </>
  );
};

export default Home;
