import React from "react";
import Svg, { Path } from "react-native-svg";

function Email() {
  return (
    <Svg width={15} height={12} viewBox="0 0 15 12" fill="none">
      <Path
        d="M15 2.651V9.75a2.25 2.25 0 01-2.118 2.246L12.75 12H2.25A2.25 2.25 0 01.004 9.882L0 9.75V2.651l7.084 4.723.087.05a.75.75 0 00.658 0l.087-.05L15 2.651z"
        fill="#B799FF"
      />
      <Path
        d="M12.75 0c.81 0 1.52.427 1.916 1.07L7.5 5.848.334 1.07A2.25 2.25 0 012.099.005L2.25 0h10.5z"
        fill="#B799FF"
      />
    </Svg>
  );
}

export default Email;
