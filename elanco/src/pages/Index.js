import React from "react";
import WelcomeBox from "../components/WelcomeBox";
import { useGlobalContext } from "../context";

const Index = () => {
  return (
    <>
      <section className="container section ">
        <div className="dog-bg">
          <WelcomeBox />
        </div>
      </section>
    </>
  );
};

export default Index;