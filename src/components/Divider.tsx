import { ColorValue, StyleSheet, View } from "react-native";

export type DividerProps = {
  color?: ColorValue;
}

export function Divider(props: DividerProps) {
  return (
    <View
      style={{
        flex: 1,
        height: 0,
        borderBottomColor: props.color ?? 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  )
}