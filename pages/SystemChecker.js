import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useNetInfo } from "@react-native-community/netinfo";

const SystemChecker = () => {
  const InternetInfo = useNetInfo();

  const checkNetwork = () => {
    console.log(InternetInfo);
  };

  const checkCameraSpecs = () => {
    console.log("Enter camera checking logic here");
  };

  const checkInternet = () => {
    console.log(InternetInfo);
  };

  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexFlow: "column wrap",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Button
            style={{ marginBottom: "1rem" }}
            mode="contained"
            onPress={() => checkNetwork()}
          >
            Check Network
          </Button>

          <Button
            style={{ marginBottom: "1rem" }}
            mode="contained"
            onPress={() => checkInternet()}
          >
            Check Internet Connectivity
          </Button>

          <Button mode="contained" onPress={() => checkCameraSpecs()}>
            Check Camera specification
          </Button>
        </div>
      </div>
    </View>
  );
};

export default SystemChecker;
