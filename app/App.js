import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import AppButton from "./screens/components/AppButton";
import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Card from "./screens/components/Card";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket For Sale"
        subTitle="$100"
        image={require("./assets/jacket.jpg")}
      />
    </View>
  );
}
