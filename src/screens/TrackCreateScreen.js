import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={{fontSize: 48, textAlign: 'center'}}>Track Create Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})

export default TrackCreateScreen;