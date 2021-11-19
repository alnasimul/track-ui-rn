import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TrackListScreen = ({navigation : {navigate}}) => {
    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text style={{fontSize: 48, textAlign: 'center'}}>Track List Screen</Text>
            <Button title='Go to Track Detail' onPress={() => navigate('TrackDetail')}/>
        </SafeAreaView>
    );
};


TrackListScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({})

export default TrackListScreen;