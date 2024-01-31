import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import Svg, { Path } from "react-native-svg";

interface AddTodoProps {
  onPress: (event: GestureResponderEvent) => void;
}

function AddTodoIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M15 5.5H1m0-4h14m-5 8H1m0 4h6m7-3v6m-3-3h6"
        stroke="#EAEAF1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function AddTodo(props: AddTodoProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <AddTodoIcon />
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

export default AddTodo;
