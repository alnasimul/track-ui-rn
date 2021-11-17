import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation: { navigate } }) => {
  const { state, signup } = useContext(AuthContext);
  

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink text="Already have an account ? Sign in instead." routeName="Signin"></NavLink>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
    marginTop: 150,
  },
});

export default SignupScreen;
