import React from "react";
import { StatusBar, View } from "react-native";
import Navigator from "./src/navigations";
import { Provider } from "react-redux";
import store from "./src/Redux";

export default function App() {
  return (
    <Provider store={store}>
      <>
        <View>
          <StatusBar barStyle="light-content" />
        </View>
        <Navigator />
      </>
    </Provider>
  );
}
