import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 140,
    padding: 10,
    borderRadius: 8,
    borderColor: "#ACBCFF",
    border: 2,
    backgroundColor: "#B799FF",
  },

  text: {
    color: "#3E3E3E",
    fontSize: 16,
  },
});
