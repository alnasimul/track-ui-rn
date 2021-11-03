import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

const TrackListScreen = ({navigation : {navigate}}) => {
    return (
        <>
            <Text style={{fontSize: 48, textAlign: 'center'}}>Track List Screen</Text>
            <Button title='Go to Track Detail' onPress={() => navigate('TrackDetail')}/>
        </>
    );
};

const styles = StyleSheet.create({})

export default TrackListScreen;