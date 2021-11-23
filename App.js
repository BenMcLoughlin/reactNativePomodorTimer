import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { Timer } from './src/features/timer/Timer';
import { spacing } from '../../utils/sizes';

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);
    return (
        <View style={styles.container}>
            <Text>{focusSubject}</Text>
            <Focus addSubject={setFocusSubject} />
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
