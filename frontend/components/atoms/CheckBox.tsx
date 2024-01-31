import React from "react";
import {
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import CheckIcon from "./CheckIcon";

interface TodoItemProps {
  containerStyle?: StyleProp<ViewStyle>;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function CheckBox(props: TodoItemProps) {
  function pressHandler() {
    props.onChange(!props.checked);
  }

  return (
    <TouchableOpacity
      style={[
        styles.container,
        !props.checked && styles.border1,
        props.containerStyle,
      ]}
      activeOpacity={0.6}
      onPress={pressHandler}
    >
      {props.checked && <CheckIcon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    height: 25,
    borderColor: "#ACBCFF",
    borderRadius: 12.5,

    justifyContent: "center",
    alignItems: "center",
  },

  border1: {
    borderWidth: 1,
  },
});

export default CheckBox;
