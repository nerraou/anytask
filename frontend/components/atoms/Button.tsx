import React from "react";
import {
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

interface ButtonProps {
  title: string;
  loading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
  function pressHandler(event: GestureResponderEvent) {
    if (!props.loading) {
      props.onPress(event);
    }
  }
  return (
    <TouchableOpacity
      style={[styles.button, props.containerStyle]}
      onPress={pressHandler}
      activeOpacity={0.6}
    >
      {props.loading && <ActivityIndicator color="#E6FFFD" />}

      {!props.loading && <Text style={styles.text}>{props.title}</Text>}
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
