//import '../_mockLocation';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const {status} = await requestForegroundPermissionsAsync();
            console.log(status);
            if (status === 'granted') {
                /* Do location reading stuff we add in a few lectures.
                 * Fortunately watchPositionAsync() actually does throw an error
                 * so we don't need to manually throw one ourselves.
                */

                await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, (location) => console.log(location))
            } else {
                throw new Error('Location permission not granted');
            }
        } catch (error) {
            setErr(error);
        }
    }

    useEffect(() => {
        startWatching();
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text  style={{ textAlign: 'center'}} h2>Create a track</Text>
            <Map/>
            {
                err ? <Text > Please Enable Location services</Text> : null
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})

export default TrackCreateScreen;