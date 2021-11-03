import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')  
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{textAlign: 'center'}}>Sign Up for tracker</Text>
      </Spacer>
        <Input 
            label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}
        />
        <Spacer />
        <Input 
            secureTextEntry
            label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false}
        />
     <Spacer>
        <Button title="Sign Up" />
      </Spacer>
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
        justifyContent: 'center',
        marginBottom: 200,
        marginTop: 150
    }
});

export default SignupScreen;
