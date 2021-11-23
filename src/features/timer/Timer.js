import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Timer({ focusSubject }) {
    return (
        <View style={styles.container}>
            <Text>Timer Goes Here: {focusSubject}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
});
