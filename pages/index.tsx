import type { NextPage } from "next";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Section1 />
      <Section2 />
    </>
  );
};

export default Home;
