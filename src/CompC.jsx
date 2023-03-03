import React from "react";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import { UserContext } from "./UserContext";

const CompC = (props) => {
  //const { info } = props; we chenged info to framework
  const framework = useContext(GlobalContext);
  const user = useContext(UserContext);

  return (
    <div>
      <div> CompC</div>

      <div>{framework}</div>
      <div>Username: {user.name}</div>
      <div>Job: {user.job}</div>
    </div>
  );
};

export default CompC;
