import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function CheckIcon(props: SvgProps) {
  return (
    <Svg width={17} height={13} viewBox="0 0 17 13" fill="none" {...props}>
      <Path
        d="M1 6.5l5 5 10-10"
        stroke="#B799FF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
