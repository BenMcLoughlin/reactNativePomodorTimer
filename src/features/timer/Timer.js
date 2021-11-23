import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';

export function Timer({ focusSubject }) {
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: spacing.xxl }}></View>
            <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.task}>{focusSubject}</Text>
            <Text>Timer Goes Here: {focusSubject}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    title: { color: colors.white, textAlign: 'center' },
    task: { color: colors.white, fontWeight: 'bold' },
});
