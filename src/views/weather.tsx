import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useReduxSelector } from "../Redux";

const Styles = StyleSheet.create({
  inputPromptContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    backgroundColor: "gray",
  },
  dataLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    margin:12
  },
  Info: {
    fontSize: 19,
    margin: 2,
  },
  Flag: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
  Btn: {
    backgroundColor: "#5463FF",
    padding: 10,
    borderRadius: 5,
    width: 180,
    marginTop: 10,
  },
  Title: {
    position: "absolute",
    top: 20,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

interface Props {
  navigation: NavigationProp<any>;
}

const WeatherScreen: React.FC<Props> = ({ navigation }) => {
  const Capital = useReduxSelector((state) => state.weather);
  return (
    <View style={Styles.inputPromptContainer}>
      <Text style={Styles.Title}>Weather Details</Text>
      <View style={Styles.Flag}>
        <Image
          source={require("../../assets/Weather.png")}
          style={{ width: 80, height: 80 }}
        />
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Tempreture :</Text>
        <Text style={Styles.Info}>{Capital?.current.temperature} &deg;C</Text>
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Preciption :</Text>
        <Text style={Styles.Info}>{Capital?.current.precip} %</Text>
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Wind Speed</Text>
        <Text style={Styles.Info}>{Capital?.current.wind_speed}</Text>
      </View>
    </View>
  );
};

export default WeatherScreen;
