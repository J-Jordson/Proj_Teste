import { View, Text, StyleSheet } from 'react-native';
import React from "react";

const Home = () => {
    return (
        <View style={styles.Container}> 
            <Text style={styles.Title}>Você está na Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
    },
    Title: {
        fontSize: 20,
    }
});

export default Home;
