import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const firstGreeting = 'Getting started with React Native!';
    const name = 'Alec Keeter';

    return (
    <View>
        <Text style={styles.textStyle}>{firstGreeting}</Text>
        <Text style={styles.textStyle2}>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});
export default ComponentsScreen;
