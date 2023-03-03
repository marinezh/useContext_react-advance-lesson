import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
  const { info } = props;
  return (
    <div>
      <div>CompB</div>
      <p>{info}</p>
      <CompC info={info} />
    </div>
  );
};

export default CompB;
