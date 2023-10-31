import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { signup } from "../api/api";
import Spinner from "react-native-loading-spinner-overlay";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupResponse, setSignupResponse] = useState(null);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await signup(email, username, password);
      setSignupResponse(response);
      setLoading(false);
      Alert.alert("Success", "Account Created Successfully!");
      console.log(signupResponse);
      navigation.navigate("Movies List");
    } catch (error) {
      setLoading(false);
      if (
        error.message ===
        "The user with the provided email already exists (EMAIL_EXISTS)."
      ) {
        Alert.alert(
          "Error",
          "Account With This Email Already Exists. Please Log In."
        );
      } else {
        Alert.alert("Error", error.message.toUpperCase());
      }
    }
  };

  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        textContent={"Creating Account..."}
        textStyle={styles.spinnerText}
      />
      <View style={styles.header}>
        <FontAwesome
          name="user-plus"
          size={32}
          color="black"
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome
          name="envelope"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  headerIcon: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: "80%",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
  spinnerText: {
    fontSize: 16,
    color: "white",
  },
});

export default SignupScreen;