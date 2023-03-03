import React from "react";
import CompB from "./CompB";

const CompA = (props) => {
  const { info } = props;
  return (
    <div>
      <div>CompA</div>
      <p>{info}</p>
      <CompB info={info} />
    </div>
  );
};

export default CompA;
