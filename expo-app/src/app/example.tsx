import { View, Text } from "react-native";
import React from "react";
import { useColors } from "@/redux/themeSlice/useColors";
import { SafeAreaView } from "react-native-safe-area-context";

const example = () => {
  const colors = useColors();

  return (
    <SafeAreaView
      style={{ backgroundColor: colors.bg, flex: 1, alignSelf: "stretch" }}
    >
      <View
        style={{
          backgroundColor: colors.bg,
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: colors.text, fontSize: 50, fontWeight: "bold" }}>
          Example
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default example;
