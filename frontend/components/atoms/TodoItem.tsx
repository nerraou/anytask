import React from "react";
import { StyleSheet, View, ViewStyle, StyleProp, Text } from "react-native";
import CheckBox from "./CheckBox";
import useUpdateTodoMutation from "../../services/useUpdateTodoMutation";
import { useAuth } from "../../hooks/useAuth";

interface TodoItemProps {
  id: number;
  text: string;
  done: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

function TodoItem(props: TodoItemProps) {
  const auth = useAuth();

  const updateTodoMutation = useUpdateTodoMutation({
    token: auth.user?.accessToken!,
  });

  return (
    <View style={[styles.container, props.containerStyle]}>
      <CheckBox
        checked={props.done}
        onChange={(checked) => {
          updateTodoMutation.mutate({
            id: props.id,
            done: checked,
          });
        }}
      />
      <Text>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#ACBCFF",
    borderRadius: 8,
  },
});

export default TodoItem;
