import React from "react";
import Header from "./Components/Header";
import ReferalEarn from "./ReferalEarn";
import DividerText from "./Components/DividerText";
import Programs from "./Components/Programs";
import SelectProgram from "./Components/SelectProgram";
import DividerOr from "./Components/DividerOr";
import ReferalStatus from "./Components/ReferalStatus";
import Footer from "./Components/Footer";


const Home = () => {
  return (
    <React.Fragment>
      <Header/>
      <ReferalEarn />
      <DividerText />
      <Programs />
      <SelectProgram />
      <DividerOr />
      <ReferalStatus />
      <Footer/>            
    </React.Fragment>
  );
};

export default Home;
