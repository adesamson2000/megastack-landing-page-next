import React from "react";
import Bottom from "../components/Bottom";
import NavBar from "../components/NavBar";
import Process from "../components/Process";
import Others from "./../components/Others";

function about() {
  return (
    <div>
      <NavBar active={"About"} />
      <Others />
      <Process />
      <Bottom />
    </div>
  );
}

export default about;
