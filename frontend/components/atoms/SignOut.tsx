import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface SignOutProps {
  onPress: (event: GestureResponderEvent) => void;
}

function SignOutIcon() {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="none">
      <Path
        d="M8 5V3a2 2 0 012-2h7a2 2 0 012 2v12a2 2 0 01-2 2h-7a2 2 0 01-2-2v-2m5-4H1m0 0l3-3M1 9l3 3"
        stroke="#3E3E3E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SignOut(props: SignOutProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <SignOutIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    backgroundColor: "#FFB8B8",
  },
});

export default SignOut;
