import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useReduxDispatch, useReduxSelector } from "../Redux";
import axios from "axios";
import { setWeather } from "../Redux/Slices/weatherSlice";

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
    margin: 12,
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

interface ReducerInterface {
  capital: string;
  population: string;
  latlng: number[];
  flags: {
    png: string;
  };
}

const CountryScreen: React.FC<Props> = ({ navigation }) => {
  const Capital: ReducerInterface = useReduxSelector((state) => state.Capital);
  const dispatch = useReduxDispatch();
  const handleSubmit = () => {
    var config = {
      method: "get",
      url: `http://api.weatherstack.com/current?access_key=9f122dd0213347594e8f451ee4489fa8&query=${Capital?.capital}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        dispatch(setWeather(response.data));
        navigation.navigate("Weather");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={Styles.inputPromptContainer}>
      <Text style={Styles.Title}>Country Details</Text>
      <View style={Styles.Flag}>
        <Image
          source={{ uri: Capital?.capital ? Capital.flags.png : "Loading" }}
          style={{ width: 180, height: 180 }}
        />
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Capital :</Text>
        <Text style={Styles.Info}>{Capital?.capital}</Text>
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Population :</Text>
        <Text style={Styles.Info}>{Capital?.population}</Text>
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Latitude :</Text>
        <Text style={Styles.Info}>
          {Capital?.capital && Capital?.latlng[0]} deg
        </Text>
      </View>
      <View style={Styles.dataLine}>
        <Text style={Styles.Info}>Longitude :</Text>
        <Text style={Styles.Info}>
          {Capital?.capital && Capital?.latlng[1]} deg
        </Text>
      </View>
      <View style={Styles.Flag}>
        <Pressable
          style={Styles.Btn}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={Styles.Info}>Capital Weather</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CountryScreen;
