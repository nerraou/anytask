import { ReactNode } from "react";
import { TextInput, View, StyleSheet } from "react-native";

interface InputProps {
  placeholder: string;
  icon: ReactNode;
}

function Input(props: InputProps) {
  return (
    <View style={style.container}>
      {props.icon}
      <TextInput placeholder={props.placeholder} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ACBCFF",
    borderRadius: 8,
    width: 247,
    padding: 8,
    gap: 4,
  },
});

export default Input;
