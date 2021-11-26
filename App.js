import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';

export default function App() {
    const [focusSubject, setFocusSubject] = useState('gardening');
    return (
        <View style={styles.container}>
            {focusSubject ? (
                <Timer focusSubject={focusSubject} addSubject={setFocusSubject} />
            ) : (
                <Focus addSubject={setFocusSubject} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
        flex: 1,
        backgroundColor: '#252250',
    },
});
