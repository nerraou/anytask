import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Password() {
  return (
    <Svg width={17} height={6} viewBox="0 0 17 6" fill="none">
      <Path
        d="M8.5 1.333v3.334m-1.667-.834l3.334-1.666m-3.334 0l3.334 1.666m-7.5-2.5v3.334M1 3.833l3.333-1.666M1 2.167l3.333 1.666m10-2.5v3.334m-1.666-.834L16 2.167m-3.333 0L16 3.833"
        stroke="#B799FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Password;
