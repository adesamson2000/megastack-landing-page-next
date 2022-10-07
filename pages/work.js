import React from "react";
import NavBar from "../components/NavBar";
import WorkFooter from "../components/WorkFooter";
import WorkHeader from "../components/WorkHeader";
import WorkProduct from "../components/WorkProduct";

function work() {
  return (
    <div>
      <NavBar active={"Work"} />
      <WorkHeader />
      <WorkProduct />
      <WorkFooter />
    </div>
  );
}

export default work;
