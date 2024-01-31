import { ReactNode } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface InputProps {
  placeholder: string;
  icon?: ReactNode;
  value: string;
  onChange: (value: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
}

function Input(props: InputProps) {
  return (
    <View style={[style.container, props.containerStyle]}>
      {props.icon}
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
      />
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
    padding: 8,
    width: "100%",
    gap: 4,
  },
});

export default Input;
