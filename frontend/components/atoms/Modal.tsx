import React, { ReactNode } from "react";
import {
  View,
  Modal as ReactNativeModal,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from "react-native";

type ModalProps = {
  visible: boolean;
  children: ReactNode | ReactNode[];
  onClose: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

function Modal(props: ModalProps) {
  return (
    <ReactNativeModal
      visible={props.visible}
      transparent
      animationType="fade"
      onRequestClose={props.onClose}
    >
      <Pressable
        style={[styles.container, props.containerStyle]}
        onPress={props.onClose}
      >
        <View>{props.children}</View>
      </Pressable>
    </ReactNativeModal>
  );
}

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
