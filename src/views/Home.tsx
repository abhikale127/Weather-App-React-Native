import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { setCapital } from "../Redux/Slices/countrySlice";
import { useReduxDispatch } from "../Redux";
import axios from "axios";

const Styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "gray",
  },
  inputPromptContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    color: "black",
    fontSize: 18,
    borderRadius: 8,
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    width: 170,
  },
  Error: {
    color: "red",
    fontSize: 18,
    borderRadius: 8,
  },
});

interface Props {
  navigation: NavigationProp<any>;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [inputVal, setInputVal] = useState("");
  const [buttonStatus, setButtonStatus] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useReduxDispatch();
  const handleSubmit = () => {
    var config = {
      method: "get",
      url: `https://restcountries.com/v3.1/name/${inputVal}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        dispatch(setCapital(response.data));
        navigation.navigate("Country");
        // console.log(JSON.stringify(response.data[1].capital));
      })
      .catch(function (error) {
        console.log(error);
        setError("Country name not found");
      });
  };

  const inputChangeHandler = () => {
    if (inputVal.length > 0) {
      setButtonStatus(false);
    }
  };

  return (
    <View style={Styles.background}>
      <View style={Styles.inputPromptContainer}>
        <TextInput
          style={Styles.inputContainer}
          value={inputVal}
          onChangeText={(text) => setInputVal(text)}
          onChange={inputChangeHandler}
          placeholder="Enter Country"
        />
        <Text style={Styles.Error}>{error}</Text>
        <Button
          title="Submit"
          disabled={buttonStatus}
          onPress={() => {
            handleSubmit();
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
